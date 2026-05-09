import Image from "next/image";

export const Home = () => {
  return (
    <>
      {/* ヘッダー */}
      <header className="header">
        <div className="header__inner">
          {/* ヘッダーの左側 */}
          <div className="header__title">
            <Image
              src="/header-img.svg"
              width={40}
              height={40}
              alt="ヘッダーのアイコン"
            ></Image>
            <p className="header__title">kandalog</p>
          </div>
          {/* ヘッダーの右側 */}
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="" className="header__item__link">
                  個人開発
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__item__link">
                  記事
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__item__link">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* about me */}
      <div className="about-me">
        <div className="about__inner">
          {/* 左側の画像部分 */}
          <div className="about__profile">
            <div>画像を配置</div>
            <p className="profile__name">kandalog</p>
            <p className="profile__detail">Webエンジニア</p>
            <ul className="sns__list">
              <li className="sns__item">
                <a href=""></a>
                <Image
                  src="/sns/x.svg"
                  width={40}
                  height={40}
                  alt="xのアイコン"
                ></Image>
              </li>
              <li className="sns__item">
                <Image
                  src="/sns/github.svg"
                  width={40}
                  height={40}
                  alt="githubのアイコン"
                ></Image>
              </li>
              <li className="sns__item">
                <Image
                  src="/sns/mail.svg"
                  width={40}
                  height={40}
                  alt="mailのアイコン"
                ></Image>
              </li>
            </ul>
          </div>
          {/* 右側の説明部分 */}
          <div className="about__detail">
            <h2 className="about__head">About me</h2>
            <p className="about__description">
              テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,
              テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,
              テキスト,テキスト,テキスト,テキスト,テキスト,テキスト
            </p>

            <button className="button about__btn">
              詳しいプロフィールを見る →
            </button>
          </div>
        </div>
      </div>

      {/* 個人開発*/}
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

      {/* 記事 */}
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
      {/* フッター */}
      <footer className="footer">
        <p className="copy-wright">
          &copy; 2026 kandalog Enginner. All rights reserved
        </p>
      </footer>
    </>
  );
};
