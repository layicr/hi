import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SphereGalleryProps {
  images: string[];
}

// 检测 WebGL 支持
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(context && context instanceof WebGLRenderingContext);
  } catch (e) {
    return false;
  }
}

// 降级显示组件
function FallbackGallery({ images }: { images: string[] }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
        color: '#666',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>📸</div>
      <h2 style={{ fontSize: '24px', marginBottom: '10px', fontWeight: '600' }}>WebGL 不可用</h2>
      <p style={{ fontSize: '16px', marginBottom: '30px', maxWidth: '400px', lineHeight: '1.6' }}>
        您的浏览器或设备不支持 WebGL，无法显示 3D 照片墙效果。
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px',
        maxWidth: '600px',
        width: '100%'
      }}>
        {images.slice(0, 6).map((img, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              paddingTop: '100%',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={img}
              alt={`照片 ${i + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// 中心跳动的爱心
function CenterHeart() {
  const heartRef = useRef<THREE.Mesh>(null);
  
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y);
    shape.bezierCurveTo(x - 2, y - 2, x - 4, y, x - 3, y + 2);
    shape.bezierCurveTo(x - 1, y + 4, x + 1, y + 4, x + 3, y + 2);
    shape.bezierCurveTo(x + 4, y, x + 2, y - 2, x, y);
    return shape;
  }, []);

  useFrame((state) => {
    if (heartRef.current) {
      const beatScale = 1.8 + Math.sin(state.clock.elapsedTime * 2) * 0.12;
      heartRef.current.scale.set(beatScale, beatScale, 1);
    }
  });

  return (
    <mesh ref={heartRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1]} renderOrder={999}>
      <shapeGeometry args={[heartShape]} />
      <meshBasicMaterial color="#ff5e8a" transparent opacity={0.95} depthTest={false} />
    </mesh>
  );
}

// 飘散的粒子
function HeartParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const items: { position: [number, number, number]; speed: number; scale: number }[] = [];
    for (let i = 0; i < 80; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25
        ],
        speed: Math.random() * 0.02 + 0.01,
        scale: 0.1 + Math.random() * 0.15
      });
    }
    return items;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, index) => {
        child.position.y += particles[index].speed;
        if (child.position.y > 15) {
          child.position.y = -15;
        }
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 16, 16]} />
          <meshBasicMaterial color="#ff9a9e" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 单张照片精灵（可点击放大）
function PhotoSprite({ 
  position, 
  url, 
  isSelected,
  onSelect 
}: { 
  position: [number, number, number]; 
  url: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const texture = useTexture(url);
  const spriteRef = useRef<THREE.Sprite>(null);
  const [hovered, setHovered] = useState(false);
  
  // 目标位置和缩放
  const targetPosition = useRef(new THREE.Vector3(...position));
  const targetScale = useRef(new THREE.Vector3(4, 4, 1));

  const handlePointerOver = () => {
    if (!isSelected) {
      setHovered(true);
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    onSelect();
  };

  useFrame(() => {
    if (!spriteRef.current) return;
    
    if (isSelected) {
      // 选中时：移动到屏幕中央前方，放大显示原图（不超过屏幕）
      targetPosition.current.set(0, 0, 8);
      targetScale.current.set(30, 30, 1);
      // 设置渲染顺序，确保在最上层
      spriteRef.current.renderOrder = 999;
      if (spriteRef.current.material) {
        spriteRef.current.material.depthTest = false;
      }
    } else if (hovered) {
      // 悬停时：稍微放大
      targetPosition.current.set(...position);
      targetScale.current.set(5, 5, 1);
      spriteRef.current.renderOrder = 1;
      if (spriteRef.current.material) {
        spriteRef.current.material.depthTest = true;
      }
    } else {
      // 默认状态
      targetPosition.current.set(...position);
      targetScale.current.set(4, 4, 1);
      spriteRef.current.renderOrder = 0;
      if (spriteRef.current.material) {
        spriteRef.current.material.depthTest = true;
      }
    }
    
    // 平滑过渡动画
    spriteRef.current.position.lerp(targetPosition.current, 0.08);
    spriteRef.current.scale.lerp(targetScale.current, 0.08);
  });

  return (
    <sprite 
      ref={spriteRef}
      position={position} 
      scale={[4, 4, 1]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <spriteMaterial map={texture} transparent />
    </sprite>
  );
}

// 球形照片墙
function PhotoSphere({ 
  images, 
  selectedPhoto,
  onPhotoSelect 
}: { 
  images: string[];
  selectedPhoto: number | null;
  onPhotoSelect: (index: number | null) => void;
}) {
  const radius = 14;
  
  const photoPositions = useMemo(() => {
    const positions: { position: [number, number, number]; url: string }[] = [];
    const count = images.length;
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * (i + 0.5) / count - 1);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      positions.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ],
        url: images[i % images.length]
      });
    }
    return positions;
  }, [images]);

  return (
    <group>
      {photoPositions.map((photo, i) => (
        <PhotoSprite 
          key={i} 
          position={photo.position} 
          url={photo.url}
          isSelected={selectedPhoto === i}
          onSelect={() => onPhotoSelect(selectedPhoto === i ? null : i)}
        />
      ))}
    </group>
  );
}

export default function SphereGallery({ images }: SphereGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [webGLError, setWebGLError] = useState<string | null>(null);

  useEffect(() => {
    // 检测 WebGL 支持
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const extendedImages = useMemo(() => {
    const result: string[] = [];
    for (let i = 0; i < 30; i++) {
      result.push(images[i % images.length]);
    }
    return result;
  }, [images]);

  // WebGL 不支持时显示降级组件
  if (webGLSupported === false) {
    return <FallbackGallery images={images} />;
  }

  // WebGL 错误时显示降级组件
  if (webGLError) {
    return <FallbackGallery images={images} />;
  }

  // 还在检测中
  if (webGLSupported === null) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#fafafa'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏳</div>
          <p style={{ color: '#666' }}>加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
        onPointerMissed={() => setSelectedPhoto(null)}
        onError={({ error }) => {
          console.error('WebGL Error:', error);
          setWebGLError(error.message || 'WebGL context creation failed');
        }}
      >
        <ambientLight intensity={1} />

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          autoRotate={selectedPhoto === null}
          autoRotateSpeed={0.6}
        />

        <CenterHeart />
        <HeartParticles />
        <PhotoSphere
          images={extendedImages}
          selectedPhoto={selectedPhoto}
          onPhotoSelect={setSelectedPhoto}
        />
      </Canvas>
    </div>
  );
}
