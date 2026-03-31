import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MANUFACTURERS = [
    {
        id: 1,
        name: 'Acecook Việt Nam',
        color: '#fff5f5',
        description: 'Nhà sản xuất chính với hơn 30 năm kinh nghiệm tại thị trường Việt Nam.',
        image: '/img/manufacturer-acecook.png'
    },
    {
        id: 2,
        name: 'Acecook Nhật Bản',
        color: '#fff9e6',
        description: 'Đối tác chiến lược cung cấp công nghệ sản xuất mì ăn liền hàng đầu thế giới.',
        image: '/img/manufacturer-acecook.png'
    },
    {
        id: 3,
        name: 'Trung tâm R&D',
        color: '#f0f9ff',
        description: 'Nơi nghiên cứu và phát triển những hương vị độc bản phù hợp khẩu vị người Việt.',
        image: '/img/manufacturer-acecook.png'
    },
    {
        id: 4,
        name: 'Vina Acecook Đà Nẵng',
        color: '#f6ffed',
        description: 'Chi nhánh sản xuất khu vực miền Trung, đảm bảo nguồn cung liên tục.',
        image: '/img/manufacturer-acecook.png'
    },
    {
        id: 5,
        name: 'Vina Acecook HCM',
        color: '#fff7e6',
        description: 'Trụ sở chính và nhà máy lớn nhất khu vực phía Nam.',
        image: '/img/manufacturer-acecook.png'
    },
];

export default function Manufacturer(): JSX.Element {
    const [bgColor, setBgColor] = useState('#ffffff');
    const [activeM, setActiveM] = useState(MANUFACTURERS[0]);

    return (
        <Layout title="Nhà sản xuất - Hảo Hảo">
            <main className="manufacturer-section" style={{ backgroundColor: bgColor, minHeight: '80vh' }}>
                <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '1rem', color: 'var(--hao-hao-red)', fontSize: '3rem', fontWeight: 800 }}>
                        HỆ THỐNG NHÀ SẢN XUẤT
                    </h1>
                    <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.2rem' }}>
                        Công nghệ Nhật Bản - Hương vị Việt Nam
                    </p>

                    <div className="m-grid">
                        {MANUFACTURERS.map((m) => (
                            <div
                                key={m.id}
                                className={`m-card ${activeM.id === m.id ? 'm-active' : ''}`}
                                onMouseEnter={() => {
                                    setBgColor(m.color);
                                    setActiveM(m);
                                }}
                            >
                                <div className="m-img-circle">
                                    <img src={useBaseUrl(m.image)} alt={m.name} />
                                </div>
                                <h3 style={{ color: activeM.id === m.id ? 'var(--hao-hao-red)' : '#333' }}>
                                    {m.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        padding: '3rem',
                        background: 'white',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid #eee'
                    }}>
                        <h2 style={{ color: 'var(--hao-hao-red)', marginBottom: '1.5rem' }}>{activeM.name}</h2>
                        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>{activeM.description}</p>
                        <hr style={{ margin: '2rem 0', opacity: 0.1 }} />
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--hao-hao-red)' }}>100%</div>
                                <div>An Toàn Thực Phẩm</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--hao-hao-red)' }}>Top 1</div>
                                <div>Thị Phần Việt Nam</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--hao-hao-red)' }}>30+</div>
                                <div>Năm Kinh Nghiệm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
