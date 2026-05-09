import Image from "next/image";

export const Article = () => {
  return (
    <section className="section article">
      {/* ヘッド関連 */}
      <div className="head__area">
        <h2 className="head">記事</h2>
        <p className="head__sub">技術や開発に関する情報を発信しています</p>
      </div>
      <button className="button">
        <a className="button__link"></a>
        <span className="button_link_parts">→※TODO</span>
      </button>
      {/* メインコンテンツ(カード) */}
      <div className="card article">
        <div className="card__header">
          <span className="chip">Next.js</span>
          <span className="date"></span>
        </div>
        <p className="article__title">記事タイトル記事タイトル記事タイトル</p>
        <p className="article__description">
          記事の説明記事の説明記事の説明記事の説明
        </p>
        <div className="card__footer">
          <div className="user_info">
            <Image
              src="/sns/github.svg"
              width={40}
              height={40}
              alt="プロフィール画像"
            ></Image>
            <p className="profile__name">kandalog</p>
          </div>
          <p className="required__time">10分で読めます</p>
        </div>
      </div>
    </section>
  );
};
