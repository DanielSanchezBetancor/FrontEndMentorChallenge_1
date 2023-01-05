import Image from "next/image";
import styles from "./HeroPage.module.css";

function HeroPage() {
    return (
        <section className={styles.hero_page}>
            <Image
                className={styles.hero__page__image_mobile}
                id="hero__page__image_mobile"
                src="/image-hero-mobile.png"
                alt="Banner decorativo"
                width={750}
                height={564}
            ></Image>
            <div className={styles.information}>
                <h2>Make remote work</h2>
                <h3>
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </h3>
                <button>Learn more</button>
                <div className={styles.partners}>
                    <Image
                        src="/client-databiz.svg"
                        alt="Banner decorativo"
                        width={0}
                        height={0}
                    ></Image>
                    {/* This image should go standalone */}
                    <Image
                        src="/client-audiophile.svg"
                        alt="Banner decorativo"
                        width={0}
                        height={0}
                    ></Image>
                    <Image
                        src="/client-meet.svg"
                        alt="Banner decorativo"
                        width={0}
                        height={0}
                    ></Image>
                    <Image
                        src="/client-maker.svg"
                        alt="Banner decorativo"
                        width={0}
                        height={0}
                    ></Image>
                </div>
            </div>
            <Image
                className={styles.hero__page__image_desktop}
                src="/image-hero-desktop.png"
                alt="Banner decorativo"
                width={100}
                height={100}
            ></Image>
        </section>
    );
}

export default HeroPage;
