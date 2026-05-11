import Image from "next/image";

export const Header = () => {
  return (
    <>
      {/* ヘッダー */}
      <header className="common header">
        <div className="header__inner">
          {/* ヘッダーの左側 */}
          <div className="header__title">
            <Image
              src="/header-img.svg"
              width={40}
              height={40}
              alt="ヘッダーのアイコン"
            ></Image>
            <p className="header__text">kandalog</p>
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
    </>
  );
};
