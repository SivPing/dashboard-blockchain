'use client'
import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface NftItem {
  id: number;
  title: string;
  collection: string;
  image?: string;
  description?: string;
}

const nfts: NftItem[] = [
  {
    id: 1,
    title: "CryptoPunk #3100",
    collection: "CryptoPunks",
    image: "/images/wallet/nft1.jpg",
    description: "A unique CryptoPunk NFT featuring a blue alien."
  },
  {
    id: 2,
    title: "Bored Ape #7495",
    collection: "Bored Ape Yacht Club",
    image: "/images/wallet/nft2.jpg",
    description: "A bored ape with rare traits from the famous collection."
  },
  {
    id: 3,
    title: "Azuki #5234",
    collection: "Azuki",
    image: "/images/wallet/nft3.jpg",
    description: "An anime-inspired Azuki NFT with distinctive style."
  },
  {
    id: 4,
    title: "Doodle #8832",
    collection: "Doodles",
    image: "/images/wallet/nft4.jpg",
    description: "A colorful Doodle with playful attributes."
  },
  {
    id: 5,
    title: "Art Blocks #103",
    collection: "Art Blocks Curated",
    image: "/images/wallet/nft5.jpg",
    description: "Generative art from the Art Blocks platform."
  },
  {
    id: 6,
    title: "Cool Cat #4921",
    collection: "Cool Cats",
    image: "/images/wallet/nft6.jpg",
    description: "A cool cat with rare accessories and unique background."
  },
  {
    id: 7,
    title: "World of Women #2756",
    collection: "World of Women",
    image: "/images/wallet/nft7.jpg",
    description: "A diverse female character from the WoW collection."
  },
  {
    id: 8,
    title: "Clone X #18354",
    collection: "Clone X",
    image: "/images/wallet/nft8.jpg",
    description: "A futuristic avatar with rare traits designed by RTFKT."
  }
];

export default function NftCollection() {
  const [selectedNft, setSelectedNft] = useState<NftItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (nft: NftItem) => {
    setSelectedNft(nft);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">NFT Collection</h1>
        <p className="text-gray-400">Your non-fungible token collection</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <Card 
            key={nft.id} 
            className="bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-700 transition-colors"
            onClick={() => openModal(nft)}
          >
            <div className="relative">
              <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-sm text-white">
                NFT {nft.id}
              </div>
              <div className="h-48 bg-zinc-800">
                <Image 
                  src={nft.image || "/placeholder.svg"}
                  alt={`${nft.title} Image`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <CardFooter className="flex flex-col items-start p-3">
              <h3 className="text-white font-medium">{nft.title}</h3>
              <p className="text-gray-400 text-sm">{nft.collection}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedNft && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg max-w-lg w-full overflow-hidden">
            <div className="relative">
              <button 
                className="absolute top-2 right-2 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                ✕
              </button>
              <div className="h-64 bg-zinc-800">
                <Image 
                  src={selectedNft.image || "/placeholder.svg"}
                  alt={`${selectedNft.title} Image`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-1">{selectedNft.title}</h2>
              <p className="text-cyan-500 text-sm mb-4">{selectedNft.collection}</p>
              <p className="text-gray-300">{selectedNft.description}</p>
              
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Token ID</p>
                    <p className="text-white">#{selectedNft.id}</p>
                  </div>
                  <Link href='/dfadfa'><Button className="bg-white hover:bg-black text-black hover:text-white px-4 py-2 rounded transition">
                    View Details
                  </Button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}