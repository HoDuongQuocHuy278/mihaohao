import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ContactParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: any[] = [];
        let mouse = { x: 0, y: 0 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = Math.random() > 0.5 ? '#E31B23' : '#FFD700';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                // Interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    ctx.beginPath();
                    // Color transitions based on mouse proximity
                    const hue = (mouse.x / window.innerWidth) * 60; // 0 (Red) to 60 (Yellow)
                    ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${1 - distance / 150})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 120; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default function Contact(): JSX.Element {
    return (
        <Layout title="Liên hệ - Hảo Hảo">
            <div className="contact-hero">
                <div className="contact-bg-wrapper">
                    <img
                        src={useBaseUrl('/img/hero-bg.jpg')}
                        className="contact-bg-img"
                        alt="Contact Background"
                    />
                </div>
                <ContactParticles />
                <div className="contact-glass">
                    <h2 style={{ color: 'var(--hao-hao-yellow)', fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                        LIÊN HỆ
                    </h2>
                    <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                            <strong>Địa chỉ:</strong> Lô II-3, Đường số 11, KCN Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP. HCM
                        </p>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                            <strong>Hotline:</strong> 1900 1234
                        </p>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                            <strong>Email:</strong> contact@acecookvietnam.com
                        </p>
                        <p style={{ fontSize: '1.2rem' }}>
                            <strong>Website:</strong> acecookvietnam.com
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <input
                            type="text"
                            placeholder="Họ và tên của bạn"
                            style={{ padding: '1rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}
                        />
                        <input
                            type="email"
                            placeholder="Email liên hệ"
                            style={{ padding: '1rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}
                        />
                        <textarea
                            placeholder="Lời nhắn cho Hảo Hảo..."
                            rows={4}
                            style={{ padding: '1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'none' }}
                        ></textarea>
                        <button className="btn-red" style={{ border: 'none', cursor: 'pointer', borderRadius: '30px', background: 'var(--hao-hao-yellow)', color: 'black' }}>
                            Gửi yêu cầu ngay
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
