'use client';
import React, { useEffect, useState } from 'react';
import Navigation from '../../layout/Navigation';
import Link from 'next/link';

const Top = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="mb-24">
        <p className="text-gray-600 text-xl mt-6">
          いま人生が思い通りに行かず苦しんでいる人へ
        </p>
        <p className="text-gray-600 text-xl mt-6 mb-6">
          運動をする前にストレッチを行うように、心にもストレッチが必要です
          実践してみませんか?
        </p>
      </div>
      <h1 className="text-2xl text-gray-600 border-b-2 border-gray-400">
        catharsisってどういうアプリなの?
      </h1>
      <p className="mt-6">
        心理療法ACTを使って、心の問題とあなたがなりたい自分になるための価値を洗い出し、心の問題を受け止めた上で、本当にやりたかったことを目指せるようになるためのお手伝いをするアプリです。
      </p>
      <p
        className="mt-4 text-red-500 hover:cursor-pointer hover:text-red-700"
        onClick={() => setIsClicked(!isClicked)}
      >
        ACTってなに？
      </p>
      {isClicked ? (
        <>
          <div className="text-gray-800 p-6 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left">
            <h1>ACTとは</h1>
            <p>Acceptance and Commitment Therapyの頭文字です。</p>
            <h2>
              Acceptance:
              アクセプタンスとは、痛みや苦しみを感じたときにそれを受け入れる場所を作るということです。その方法は心をオープンにするエクササイズのセクションで扱います。
            </h2>
            <p>
              ACTは心理療法の一種で、その目的は心の柔軟性にあります。
              <br />
              その目的は、
              <span className="text-red-500">「心をオープン」</span>にし、
              <span className="text-red-500">
                「より価値のある人生のため、必要なことだけ」
              </span>
              を行い、常に<span className="text-red-500">「今、この瞬間」</span>
              を意識することにあります。
            </p>
            <br />
            <p>
              心をオープンにするとは、痛みを受け入れる(Acceptance)ことで、ネガティブな過去からも気付きを得ることができます。
            </p>
            <br />
            <p>
              必要なことだけを行うということは、ネガティブな感情によって生じる行動(例えば、先延ばし癖など)を最小限にし、自分の価値に沿って生きるために必要です。
            </p>
            <br />
            <p>
              今、この瞬間を意識するということは、過去や未来というのは不変であり、それを嘆いていても現状が改善するわけではないので、現在にのみ焦点を当てようというものです。
              <br />
              その際に、マインドという自分の思考が、過去や未来について思いを巡らせてしまいがちなため、忘れがちな感情、感覚というものをゆっくりと感じ取ることが大事です。
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
      <p className="mb-12" />
      <br />
      <Navigation content="あなたの価値">
        <Link href="/values">
          <span className="text-blue-400 hover:cursor-pointer">
            エクササイズはこちら
          </span>
        </Link>
        <p>価値とは</p>
        <br />
        <ul className="mb-6">
          <li>
            <span className="border-b-4 border-red-300">継続的な行動</span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">全体的な性質</span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">
              望ましいものである
            </span>
          </li>
        </ul>
        という特徴を持っています。
        <br />
        <p className="mt-6 mb-4">
          <span className="text-red-700">継続的な行動</span>
          <br />
          とは、人生における方向性のようなもので、「〜でいたい！」というようなものです。
          <br />
          目標がその対義語です。目標には期限がありますが、価値にはありません。
          <br />
          <span className="text-gray-400">
            例：何かを創造していきたい！、家族を幸せにしていきたい！、困っている人を救いたい！
          </span>
        </p>
        <p className="mt-4">
          <span className="text-red-700">全体的な性質</span>
          <br />
          価値とは、抽象的な表現になります。
          <br />
          曖昧ではありますが、具体的にしすぎると視野を狭めることに繋がりかねないので、価値を決める際はやんわりとしたもので大丈夫です。
          <br />
          <span className="text-gray-400">
            具体的すぎる例:野球がしたい、パン屋さんで働きたい。
          </span>
        </p>
        <p className="mt-4">
          <span className="text-red-700">望ましいもの</span>
          <br />
          とは、「したいこと」であるということです。
          <br />
          ネガティブなニュアンスの言葉は控えたほうが良いです。
          <br />
          <span className="text-gray-400">
            例：〜しなくてはならない、〜をやめたい、〜したくない、〜を消したい
          </span>
        </p>
      </Navigation>
      <br />
      <Navigation content="苦しい気持ちに対処する">
        <Link href="/problems">
          <span className="text-blue-400 hover:cursor-pointer">
            エクササイズはこちら
          </span>
        </Link>
        <h1>
          苦悩を減らし、豊かな生活を送るために、問題のある思考と価値を知ることが重要です。
        </h1>
        <ul className="mt-4">
          <li>
            <h2 className="border-b-4 border-red-300">悩みと苦しみ</h2>
          </li>
          <li>問題のある感情</li>
          <li>問題のある行為</li>
          <br />
        </ul>
      </Navigation>
      <br />

      <Navigation content="みんなのエクササイズ">
        <Link href="emotions">
          <span className="text-blue-400 hover:cursor-pointer">
            エクササイズはこちら
          </span>
        </Link>
      </Navigation>

      <p className="mt-36" />
    </div>
  );
};

export default Top;
