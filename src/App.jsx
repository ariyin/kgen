import { useState, useEffect } from "react";
import "./App.css";
import HistoricalContext from "./HistoricalContext";
import Analysis from "./Analysis";
import kgen from "./assets/kgen.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (id) => {
    navigateTo(id);
    setIsMobileMenuOpen(false); // close menu after navigation
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 hidden w-full justify-end gap-5 p-5 transition-all duration-300 md:flex ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <button onClick={() => navigateTo("introduction")}>introduction</button>
        <button onClick={() => navigateTo("historical-context")}>
          historical context
        </button>
        <button onClick={() => navigateTo("analysis")}>analysis</button>
        <button onClick={() => navigateTo("conclusion")}>conclusion</button>
        <button onClick={() => navigateTo("sources")}>sources</button>
      </div>
      {/* === HAMBURGER MENU === */}
      <div
        className={`fixed top-0 z-50 flex w-full justify-start p-5 transition-all duration-300 md:hidden ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <button onClick={toggleMobileMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* === MOBILE SIDE PANEL === */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleMobileMenu}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start gap-5 p-5">
          <button onClick={() => handleNavigation("introduction")}>
            introduction
          </button>
          <button onClick={() => handleNavigation("historical-context")}>
            historical context
          </button>
          <button onClick={() => handleNavigation("analysis")}>analysis</button>
          <button onClick={() => handleNavigation("conclusion")}>
            conclusion
          </button>
          <button onClick={() => handleNavigation("sources")}>sources</button>
        </div>
      </div>
      {/* === CONTENT === */}
      <div className="flex h-screen items-center justify-center bg-[url('./assets/paper.jpg')] bg-cover bg-center">
        <div className="content items-center">
          <img src={kgen} className="w-3/4" alt="kgen logo" />
          <p className="w-3/4 text-center sm:w-1/2 lg:w-2/3">
            An exploration of how K-pop has evolved across generations through
            musical and stylistic analysis.
          </p>
          <p className="w-3/4 text-center text-sm md:w-2/3 lg:w-1/2 xl:w-2/3">
            The name "kgen" plays on the "K-" prefix (as in K-pop, K-drama) and
            also echoes the mathematical use of "k" as a variable — representing
            any generation.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {/* === INTRODUCTION === */}
        <section id="introduction" className="content p-8 sm:p-16">
          <h1>INTRODUCTION</h1>
          <p>
            K-pop, short for "Korean popular music," has grown from a domestic
            music industry into a global cultural force. Even if you aren't
            deeply familiar with the genre, you've likely encountered its
            influence through groups like BTS or BLACKPINK. While "K-pop" can
            broadly refer to any popular music from Korea — including genres
            like R&B, ballad, hip-hop, rock, and electronic — its more common
            usage points specifically to idol group-centered music that has
            found international success. Interestingly, the term "K-pop" itself
            originated outside of Korea, coined by Japanese observers as a way
            to distinguish Korea's burgeoning idol group scene from Japan's
            J-pop. In this sense, K-pop is best understood not just by its
            sound, but by its global reception: Korean idol music that generates
            international attention and buzz. Within the history of K-pop, the
            concept of "generations" helps fans and scholars alike trace the
            evolution of the industry's style, sound, and structure. Typically
            divided into 8-year cycles, each generation reflects shifts in
            musical trends, technology, industry practices, and audience
            engagement. From the raw experimentation of the 1st generation to
            the polished global outreach of the 5th, K-pop's generational
            framework provides a valuable lens through which we can analyze how
            the music and its cultural impact have transformed over time.
          </p>
          <p>
            K-pop has transformed dramatically over the decades, evolving from
            its early idol group roots into a global phenomenon with a diverse
            range of sounds and styles. Each generation of K-pop has been shaped
            by its historical context, industry trends, and growing
            international influence. As someone who began listening to K-pop in
            the middle of the 3rd generation, I've found my musical preferences
            often leaning toward the 2nd and 5th generations, while feeling less
            connected to others like the 4th. This personal curiosity sparked my
            central question:{" "}
            <strong>
              how has K-pop music evolved across its generations, and why do
              certain eras resonate with me more than others?
            </strong>{" "}
            Through analyzing a curated set of songs from each generation —
            supported by both cultural research and data from Spotify — this
            project aims to uncover the musical patterns, lyrical trends, and
            industry shifts that define each phase of K-pop's growth. It is
            intended for people who enjoy K-pop, are familiar with it, or are
            simply curious about how this global genre has evolved over time.
          </p>
        </section>
        <HistoricalContext />
        <Analysis />
        {/* === CONCLUSION === */}
        <section
          id="conclusion"
          className="title-sections text-platinum bg-black p-8 sm:p-16"
        >
          <h1>CONCLUSION</h1>
          <div className="content">
            <p>
              Understanding how K-pop has evolved across generations isn't just
              an exercise in musical nostalgia — it offers insight into how
              global trends, industry structures, and audience preferences shape
              popular music. This analysis highlights the shifts in sound,
              structure, and lyrical content that reflect K-pop's growing global
              presence and adaptability. As the genre continues to evolve, I
              expect to see even more cross-cultural blending, shorter song
              durations tailored to digital platforms, and recurring influences
              from Y2K and retro aesthetics. There will also likely be more
              experimentation with different genres. For example, Katseye's
              recent release "Gnarly" — which was acquired from Alice Longyu Gao
              — went extremely viral due to its unique sound and style, which
              Alice Longyu Gao is known for. While Katseye isn't technically
              K-pop and is more like a global girl group, one of their parent
              companies, HYBE, is one of the biggest entertainment companies in
              Korea and manages many popular K-pop groups today. This suggests
              that even more experimental songs might be embraced within the
              broader K-pop industry moving forward.
            </p>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/1j15Ar0qGDzIR0v3CQv3JL?utm_source=generator"
              width="100%"
              height="152"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              alt="katseye gnarly spotify embed"
            ></iframe>
            <p>
              I've also started to understand why I might be especially drawn to
              2nd and 5th generation songs. Interestingly, both share
              similarities in the keys and modes used, though I can't say for
              sure whether that directly explains my preference — especially
              since I'm not deeply versed in music theory or great at
              articulating how songs make me feel. One unique trait of 2nd gen
              is its higher loudness and energy compared to other generations,
              but on the other hand, 5th gen songs have the lowest loudness and
              energy levels, so those factors likely don't play a significant
              role in my preference.
            </p>
            <p>
              Looking ahead, I'm interested in expanding this research to build
              a more robust understanding of K-pop's development. Possible next
              steps include deeper genre classification and tracing musical
              influences across cultures, enlarging the song dataset for more
              comprehensive comparisons, and analyzing the evolution of visual
              and aesthetic trends alongside musical ones. As a listener whose
              preferences span multiple generations, this exploration has helped
              me better understand not just how K-pop has changed — but why
              certain eras resonate with me more than others.
            </p>
          </div>
        </section>
        <section id="sources" className="title-sections p-8 sm:p-16">
          <h1>SOURCES</h1>
          <p>
            The "Historical Context" section draws from and synthesizes
            information found across all the sources listed in the annotated
            bibliography, combining insights from each to provide a broader
            understanding. Additional tools and resources used in the analysis
            are listed separately in the "Other Sources" section.
          </p>
          <section className="content">
            <h2>ANNOTATED BIBLIOGRAPHY</h2>
            <p>
              Cheol-min, Song. K-Pop Beyond Asia. 2016. Accessed 29 Apr. 2025.
            </p>
            <p>
              This source is a book published by the Korean Culture and
              Information Service (KOCIS) that traces the 100-year history of
              Korean pop music, emphasizing how K-pop evolved from Western pop
              influences through processes of imitation, translation, and
              creative reinterpretation. It argues that K-pop, once seen as a
              regional phenomenon, is now a global cultural force with lasting
              impact. Although it doesn't cite specific sources, the book's
              authority stems from being produced by a governmental cultural
              organization and includes in-depth historical and industry
              analysis. It breaks down K-pop's development year by year — from
              the post-1945 era and the US military presence to the rise of idol
              groups and international breakthroughs like PSY's "Gangnam Style"
              — showing how music styles and production models have shifted over
              time. This source is valuable to my thesis because it offers a
              detailed chronological framework of K-pop's evolution, helping
              contextualize the genre's stylistic changes and growing global
              appeal, which supports the argument that K-pop's current form is
              the result of deliberate, long-term artistic and industry
              development.
            </p>
            <p>
              Lee, Jangwoo, and Lynn Pyun. "Is There Innovation in the K-Pop
              Industry? A Theoretical Perspective." Asia Pacific Business
              Review, Sept. 2023, https://doi.org/10.1080/13602381.2023.2264042.
              Accessed 31 May 2025.
            </p>
            <p>
              In this article, Lee and Pyun introduce the M-ies model—a new
              theoretical framework for analyzing innovation in the K-pop
              industry, which they argue has been largely overlooked in business
              scholarship. The model emphasizes the role of innovators (i) in
              maintaining innovative momentum (M) by strategically responding
              (s) to changes in the external environment (e). To support their
              claims, the authors draw from a wide range of sources, including
              historical economic texts, industry reports, and academic studies
              on K-pop's transnational marketing, digital transformation, and
              organizational strategies. This source was especially valuable to
              my research because it offered rich historical context by framing
              K-pop's evolution through its different generations and
              highlighting the key innovations that shaped each era. I found the
              discussion of technological and stylistic shifts particularly
              insightful, as it clarified how changes in production,
              distribution, and marketing not only shaped the music but also
              influenced consumer preferences. I agree with the authors'
              conclusion that these innovations were not solely industry-driven,
              but also responsive to shifting audience demands. This directly
              strengthens my thesis by illustrating how innovation has been
              central to K-pop's development — each generation's defining traits
              reflect the industry's ability to strategically adapt in order to
              stay culturally and commercially relevant.
            </p>
            <p>
              Lim, Jong-Pill, and Chung Jae-Youn. "Melody Development Technique
              of K-Pop Idol Group Chorus." Journal of the Korea Entertainment
              Industry Association, vol. 17, no. 6, Aug. 2019,
              https://doi.org/10.21184/jkeia.2023.8.17.6.39. Accessed 29 Apr.
              2025.
            </p>
            <p>
              This source examines the continuing global popularity of the
              Korean Wave (Hallyu), particularly focusing on K-Pop, which has
              been ranked by international consumers as the most recognized
              image of Korea for five consecutive years. The study argues that
              the addictive quality of K-Pop choruses significantly contributes
              to its widespread appeal and sets out to analyze the
              characteristics of these choruses across different K-Pop
              generations. Using data from Melon's historical charts, the study
              selected 120 songs for analysis and found that K-Pop choruses have
              evolved over generations, often using techniques such as reducing
              or simply repeating a musical motive to create a catchy effect.
              The evidence used includes a wide range of sources, from
              government trade data and global Hallyu trend reports to academic
              theses on K-Pop's history, idol strategies, fandom culture, and
              music structure, as well as books and journal articles on melody,
              music theory, and pop culture. These sources, drawn from respected
              academic institutions, government organizations, and professional
              publications, establish a strong foundation for the study's
              conclusions. This research is significant because it highlights
              how musical structure directly influences global cultural
              phenomena, offering a detailed and technical understanding of
              K-Pop's success. I agree with the study's conclusion that the
              simplicity and repetition in K-Pop choruses are crucial to its
              international popularity. This source supports my thesis by
              providing concrete musical analysis to explain K-Pop's global rise
              and fits into my argument about how deliberate artistic techniques
              contribute to the success of Korean pop culture internationally.
            </p>
            <p>
              Song, Ju-Hee, and Keun-Young Seo. "THE PROGRESS OF K-POP IDOL
              TREND AS A DIALECTIC DEVELOPMENT PROCESS -FOCUSED ON IDOLS FROM
              1ST TO 4TH GENERATION-" DBpia, 25 Nov. 2023,
              www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11613262. Accessed 29
              Apr. 2025.
            </p>
            <p>
              This source is a study that analyzes the rapid global growth of
              K-pop idol music, arguing that its success comes from its ability
              to evolve with popular culture, adapt to technological advances,
              and reflect the spirit of each era. It categorizes K-pop's
              development into generational shifts, using Hegel's dialectical
              development process to trace how societal, cultural, economic, and
              technological factors have shaped idol trends. The evidence comes
              from a wide range of materials, including master's theses from
              Kyunghee and Soongsil Universities, studies on music business and
              K-pop globalization, major Korean news outlets like Edaily and
              Yonhap News, Wikipedia entries, and Oxford Dictionary definitions.
              This is significant because it thoroughly explains how different
              generations of K-pop idols emerged, the musical styles that
              defined each era, and how the industry strategically adapted,
              providing a strong background for understanding K-pop's evolution.
              I agree with its conclusions because it offers an objective and
              well-supported overview of the changes across generations. This
              source specifically supports my thesis by providing critical
              background information about the historical and technological
              development of K-pop idol music and will fit early in my argument
              to set the context for later analysis.
            </p>
            <p>
              Song, Sooho. "The Evolution of the Korean Wave How Is the Third
              Generation Different from Previous Ones?" Korea Observer., vol.
              51, no. 1, 2020, pp. 125-50,
              https://doi.org/10.29152/KOIKS.2020.51.1.125. Accessed 31 May
              2025.
            </p>
            <p>
              In this article, Song examines the uniqueness of the third
              generation of the Korean Wave (Hallyu) in comparison to the first
              two, arguing that recent Korean media products have positioned
              South Korea as a leader in global cultural flows. He provides a
              generational overview of the Korean Wave, highlighting that while
              the first and second generations shared similarities in their
              grassroots global spread and reliance on hybridity — blending
              Eastern and Western values — the third generation is marked by the
              global success of BTS, the popularity of mukbang, and the
              international acclaim of Korean films and dramas. Song explores
              how social media intensified the third generation's reach and
              influence, and considers the cultural implications of this wave,
              including neo-orientalism and the phenomenon of cultural "reverse
              flow." Drawing on a range of sources — from academic journals to
              news outlets like BBC and The Korea Times — the article offers a
              comprehensive view of how Hallyu has evolved. This source is
              particularly valuable for my thesis as it highlights the growing
              influence of innovation and strategic media use in K-pop's global
              rise. I agree with Song's conclusions, especially his emphasis on
              BTS and the role of digital platforms in shaping cultural
              consumption. His historical breakdown of the Korean Wave provides
              a useful framework for understanding how each generation built
              upon the last. This fits into my argument by showing that K-pop's
              current global impact is not accidental but a result of deliberate
              adaptation and innovation across different media forms.
            </p>
          </section>
          <section className="content">
            <h2>OTHER SOURCES</h2>
            <p>
              Berjamin, Sandra Angela. "K-Pop Hits through the Years."
              Kaggle.com, 2022,
              www.kaggle.com/datasets/sberj127/kpop-hits-through-the-years/data.
              Accessed 1 June 2025.
            </p>
            <p>
              Contributors. "List of K-Pop on the Billboard Year-End Charts."
              Wikipedia.org, Wikimedia Foundation, Inc., 16 Dec. 2024,
              en.wikipedia.org/wiki/List_of_K-pop_on_the_Billboard_year-end_charts.
              Accessed 1 June 2025.
            </p>
            <p>
              "Exportify." Exportify.net, 2025, exportify.net/. Accessed 1 June
              2025.
            </p>
            <p>
              "LyricsGenius: A Python Client for the Genius.com API."
              LyricsGenius, 2020, lyricsgenius.readthedocs.io/en/master/#.
              Accessed 1 June 2025.
            </p>
            <p>
              "Melon." 멜론, 2024,
              www.melon.com/chart/age/index.htm?chartType=AG&chartGenre=KPOP.
              Accessed 1 June 2025.
            </p>
            <p>
              “Radix Icons.” Radix-Ui.com, www.radix-ui.com/icons. Accessed 2
              June 2025.
            </p>
            <p>
              "Stopwords-Ko.txt." GitHub, 2016,
              github.com/stopwords-iso/stopwords-ko/blob/master/stopwords-ko.txt.
              Accessed 1 June 2025.
            </p>
            <p className="break-all sm:break-normal">
              "Transcription Analysis and Music Transcription."
              Colab.research.google.com,
              colab.research.google.com/drive/1QK7sCNa4L0hqYBwbmKpcylmy4K8HgpGe?usp=sharing.
              Accessed 1 June 2025.
            </p>
            <p>
              "Voyant Tools." Voyant-Tools.org, 2025, voyant-tools.org/.
              Accessed 1 June 2025.
            </p>
            <p>
              "Web API Reference | Spotify for Developers." Spotify.com, 2025,
              developer.spotify.com/documentation/web-api/reference/get-audio-features.
              Accessed 1 June 2025.
            </p>
            <p>
              Yuliya Pauliukevich. "Crumpled Paper Texture Realisric, Crease
              Sheet." Vecteezy,
              www.vecteezy.com/vector-art/13396404-crumpled-paper-texture-realisric-crease-sheet.
              Accessed 2 June 2025.
            </p>
            <p>
              Bonus: The scrapbook-style logo on this site uses letters sourced
              from the logos of BLACKPIN
              <strong>K</strong>, BIGBAN<strong>G</strong>, BOYN
              <strong>E</strong>XTDOOR, and E<strong>N</strong>HYPEN. The color
              scheme is inspired by BOYNEXTDOOR's "19.99" album art. I wanted to
              incorporate letters from groups featured in the analysis that I
              personally enjoy, while still keeping the overall design cohesive.
              Sadly, this meant choosing the "K" from BLACKPINK (not one of my
              top favorites) over runner-ups like AKMU and Stray Kids. Other
              contenders for different letters included aespa, i-dle, EXO, and
              NCT.
            </p>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
