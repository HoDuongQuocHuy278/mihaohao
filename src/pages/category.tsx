import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

const CATEGORIES = [
    {
        name: 'Mì Ăn Liền',
        image: '/img/category-noodles.png',
        description: 'Hương vị truyền thống, sợi mì dai ngon.'
    },
    {
        name: 'Bún & Phở',
        image: '/img/category-vermicelli.png',
        description: 'Tinh hoa ẩm thực Việt trong từng sợi bún.'
    },
    {
        name: 'Cháo Ăn Liền',
        image: '/img/category-noodles.png',
        description: 'Bổ dưỡng, thơm ngon như cháo mẹ nấu.'
    },
    {
        name: 'Miến & Hủ Tiếu',
        image: '/img/category-vermicelli.png',
        description: 'Đa dạng hương vị, thanh đạm mỗi ngày.'
    },
];

export default function Category(): JSX.Element {
    return (
        <Layout title="Danh mục sản phẩm - Hảo Hảo">
            <div className="category-container">
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: 'var(--hao-hao-red)'
                }}>
                    DANH MỤC SẢN PHẨM
                </h1>
                <div className="row">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="col col--6" style={{ marginBottom: '2rem' }}>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="category-card">
                                    <img src={useBaseUrl(cat.image)} alt={cat.name} />
                                    <div className="category-label">
                                        <div>{cat.name}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 400, marginTop: '0.5rem' }}>
                                            {cat.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
