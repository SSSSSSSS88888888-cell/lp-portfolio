"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  tags: string[];
  delay?: number;
}

export default function WorkCard({
  title,
  category,
  image,
  href,
  tags,
  delay = 0,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Link href={href} className="group block">
        <div className="relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
          {/* サムネイル */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* ホバー時の「詳しく見る」 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-medium">
                詳しく見る
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* コンテンツ */}
          <div className="p-6">
            {/* カテゴリ */}
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full mb-3">
              {category}
            </span>

            {/* タイトル */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>

            {/* 技術タグ */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
