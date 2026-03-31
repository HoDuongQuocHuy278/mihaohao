import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  useEffect(() => {
    // Client-side only JS effect for hero image movement
    const hero = document.querySelector('.hero-image') as HTMLElement;
    const handleMouseMove = (e: MouseEvent) => {
      if (!hero) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      hero.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout
      title="Hảo Hảo - Hương Vị Việt Quốc Dân"
      description="Thương hiệu mì ăn liền hàng đầu Việt Nam - Acecook Việt Nam">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <section className="hero-container">
          <img
            src={useBaseUrl('/img/hero-bg.jpg')}
            alt="Hảo Hảo Noodle Hero"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">HẢO HẢO</h1>
            <p style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              HƯƠNG VỊ KẾT NỐI TRIỆU TÂM HỒN VIỆT
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/products" className="btn-red">
                Khám phá sản phẩm
              </Link>
              <Link to="/contact" className="btn-red" style={{ background: 'var(--hao-hao-yellow)', color: '#000' }}>
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#fff' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '3rem', color: 'var(--hao-hao-red)' }}>
              TẠI SAO CHỌN HẢO HẢO?
            </h2>
            <div className="row">
              <div className="col col--4">
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--hao-hao-red)', fontSize: '1.5rem' }}>Chất lượng Nhật Bản</h3>
                  <p style={{ fontSize: '1.1rem', color: '#555' }}>Sản xuất theo công nghệ tiên tiến và quy trình kiểm soát khắt khe từ Acecook Nhật Bản.</p>
                </div>
              </div>
              <div className="col col--4">
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--hao-hao-red)', fontSize: '1.5rem' }}>Hương vị Độc Bản</h3>
                  <p style={{ fontSize: '1.1rem', color: '#555' }}>Vị Tôm Chua Cay đặc trưng, sự hòa quyện hoàn hảo giữa sợi mì dai ngon và nước súp đậm đà.</p>
                </div>
              </div>
              <div className="col col--4">
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--hao-hao-red)', fontSize: '1.5rem' }}>Tiện lợi Nhanh chóng</h3>
                  <p style={{ fontSize: '1.1rem', color: '#555' }}>Chỉ mất 3 phút để có ngay một bữa ăn thơm ngon, đầy đủ dinh dưỡng cho mọi gia đình.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
