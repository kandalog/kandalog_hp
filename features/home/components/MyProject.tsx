import Image from "next/image";

export const MyProject = () => {
  return (
    <section className="section my-project">
      {/* ヘッド関連 */}
      <div className="head__area">
        <h2 className="head">個人開発</h2>
        <p className="head__sub">アイデアを形にしたプロダクトたち</p>
      </div>
      <button className="button">
        <a className="button__link"></a>
        <span className="button_link_parts">→※TODO</span>
      </button>
      {/* メインコンテンツ(カード形式のWebサービス3つ) */}
      <div className="card my-project">
        {/* 画像 */}
        <div>画像</div>
        <p className="card__title">タスク管理アプリ</p>
        <p className="card__description">
          テキスト,テキスト,テキスト,テキスト,テキスト,
          テキスト,テキスト,テキスト,テキスト,テキスト,
        </p>
        <div className="card__chip">
          <span>Next.js</span>
          <span>TypeScript</span>
        </div>
        <div className="card__footer">
          <button className="card__detail__btn">詳細を見る →</button>
          <div className="card__icons">
            <button>
              <Image
                src="/link.svg"
                width={40}
                height={40}
                alt="githubのアイコン"
              ></Image>
            </button>
            <button>
              <Image
                src="/link.svg"
                width={40}
                height={40}
                alt="詳細へ遷移するアイコン"
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
