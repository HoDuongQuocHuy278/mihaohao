import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PRODUCTS = [
    { name: 'Hảo Hảo Tôm Chua Cay', price: '4.500đ', image: '/img/product-1.jpg' },
    { name: 'Hảo Hảo Sa Tế Hành Bình Dương', price: '4.500đ', image: '/img/product-2.jpg' },
    { name: 'Hảo Hảo Sườn Heo Tỏi Phi', price: '5.000đ', image: '/img/hero-bg.jpg' },
    { name: 'Hảo Hảo Mì Xào Chua Cay', price: '5.500đ', image: '/img/product-1.jpg' },
    { name: 'Hảo Hảo Cay Kay', price: '6.000đ', image: '/img/product-2.jpg' },
    { name: 'Hảo Hảo Chay Rau Nấm', price: '4.500đ', image: '/img/hero-bg.jpg' },
];

export default function Products(): JSX.Element {
    return (
        <Layout title="Sản phẩm chi tiết - Hảo Hảo">
            <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--hao-hao-red)'
                }}>
                    DANH MỤC SẢN PHẨM CHI TIẾT
                </h1>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '4rem', fontSize: '1.2rem' }}>
                    Khám phá trọn bộ hương vị mì Hảo Hảo yêu thích của bạn
                </p>
                <div className="product-grid">
                    {PRODUCTS.map((p, i) => (
                        <div key={i} className="product-card">
                            <div className="product-image-container">
                                <img src={useBaseUrl(p.image)} alt={p.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{p.name}</h3>
                                <p className="product-price">{p.price}</p>
                                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                    <button className="btn-red" style={{ border: 'none', cursor: 'pointer', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
