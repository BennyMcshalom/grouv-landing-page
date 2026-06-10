'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { POSTS } from '@/lib/data';

const INTERVAL = 5000;

export default function JustGrouv() {
  const [[prev, current], setIndices] = useState<[number, number]>([-1, 0]);

  function go(next: number) {
    setIndices((state) => (state[1] === next ? state : [state[1], next]));
  }

  useEffect(() => {
    const id = setInterval(() => {
      setIndices((state) => [state[1], (state[1] + 1) % POSTS.length]);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current]);

  return (
    <section className="sect-pad dark" aria-label="A quieter kind of post">
      <div className="jg-glow" aria-hidden="true" />
      <div className="wrap split rev">
        <div className="split-media" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="post-stage" aria-live="polite">
            {POSTS.map((post, i) => (
              <div
                key={post.heading}
                className={`post-slide${i === current ? ' active' : ''}${i === prev ? ' leaving' : ''}`}
              >
                <figure className="post-card jg-card">
                  <span className="jg-tag">{post.tag}</span>
                  {post.image ? (
                    <Image src={post.image} alt="" width={330} height={413} />
                  ) : (
                    <div className="post-bg" style={{ background: post.grad }}>
                      <span className="ph-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff"
                          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity={0.85}>
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
                          <circle cx="12" cy="13" r="3.2" />
                        </svg>
                      </span>
                      <span className="ph-lbl">{post.ph}</span>
                      <span className="ph-hint">developer adds image here</span>
                    </div>
                  )}
                  <div className="jg-overlay" aria-hidden="true" />
                  <div className="jg-top" aria-hidden="true">
                    <div className="jg-clock">{post.clock}</div>
                    <div className="jg-loc">{post.place}</div>
                  </div>
                  <figcaption className="jg-cap">
                    <p>{post.caption}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <div className="post-dots">
            {POSTS.map((post, i) => (
              <button
                key={post.heading}
                type="button"
                className={`pd-dot${i === current ? ' on' : ''}`}
                aria-label={`Show post ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div className="split-copy">
          <div className="post-copy-stage">
            {POSTS.map((post, i) => (
              <div key={post.heading} className={`post-copy${i === current ? ' active' : ''}`}>
                <span className="eyebrow">{post.eyebrow}</span>
                <div className="head">
                  <h2>
                    {post.heading} <em>{post.em}</em>
                  </h2>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
