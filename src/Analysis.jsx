import meanduration from "./assets/mean/duration.png";
import meankey from "./assets/mean/key.png";
import meanloudness from "./assets/mean/loudness.png";
import meanscale from "./assets/mean/scale.png";
import meantempo from "./assets/mean/tempo.png";
import csduration from "./assets/candlestick/duration.png";
import cskey from "./assets/candlestick/key.png";
import csloudness from "./assets/candlestick/loudness.png";
import csscale from "./assets/candlestick/scale.gif";
import cstempo from "./assets/candlestick/tempo.png";
import stackedkey from "./assets/stacked/key.png";
import stackedmode from "./assets/stacked/mode.png";

function Analysis() {
  return (
    <section id="analysis" className="title-sections p-8 sm:p-16">
      <h1>ANALYSIS</h1>
      <section className="content">
        <h2>AUDIO FEATURE ANALYSIS</h2>
        <p>
          Now that we've explored the historical context and cultural forces
          that have shaped K-pop, I selected 15 representative songs from each
          generation to analyze how the music has evolved sonically. These songs
          were chosen based on a combination of criteria:
        </p>
        <li>Chart success (e.g., Billboard, Melon)</li>
        <li>Cultural impact or virality</li>
        <li>Inclusion in curated playlists (e.g., Apple Music)</li>
        <li>Community discussions and fan recognition (e.g., Reddit)</li>
        <p>The chosen songs for each generation is as following:</p>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/7cMafHciKqVHlTjca3aZbj?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          alt="1st gen Playlist Spotify Embed"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/5lX3oei64Fmxgo75GaEGTB?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          alt="2nd gen Playlist Spotify Embed"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/0fs1tyNheYXFN64cBJzcfF?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          alt="3rd gen Playlist Spotify Embed"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4UajGFWprsY2SDQIVX3UgO?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          alt="4th gen Playlist Spotify Embed"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/176IwzDfWHovfxSl2b1L6v?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          alt="5th gen Playlist Spotify Embed"
        ></iframe>
        <p>
          The goal is to examine how various audio features shift across
          generations and to see whether these shifts align with historical
          trends — and whether they help define each generation's distinctive
          sound. Since Spotify discontinued their audio analysis tools, I used
          Exportify to extract the same data. From it, I gathered the following
          features for each track, along with descriptions sourced from
          Spotify's API reference:
        </p>
        <li>
          <strong>Duration (ms)</strong>
        </li>
        <li>
          <strong>Danceability</strong>: Danceability describes how suitable a
          track is for dancing based on a combination of musical elements
          including tempo, rhythm stability, beat strength, and overall
          regularity. A value of 0.0 is least danceable and 1.0 is most
          danceable.
        </li>
        <li>
          <strong>Energy</strong>: Energy is a measure from 0.0 to 1.0 and
          represents a perceptual measure of intensity and activity. Typically,
          energetic tracks feel fast, loud, and noisy. For example, death metal
          has high energy, while a Bach prelude scores low on the scale.
          Perceptual features contributing to this attribute include dynamic
          range, perceived loudness, timbre, onset rate, and general entropy.
        </li>
        <li>
          <strong>Key</strong>: The key the track is in. Integers map to pitches
          using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and
          so on. If no key was detected, the value is -1.
        </li>
        <li>
          <strong>Loudness</strong>: The overall loudness of a track in decibels
          (dB). Loudness values are averaged across the entire track and are
          useful for comparing relative loudness of tracks. Loudness is the
          quality of a sound that is the primary psychological correlate of
          physical strength (amplitude). Values typically range between -60 and
          0 db.
        </li>
        <li>
          <strong>Mode</strong>: Mode indicates the modality (major or minor) of
          a track, the type of scale from which its melodic content is derived.
          Major is represented by 1 and minor is 0.
        </li>
        <li>
          <strong>Speechiness</strong>: Speechiness detects the presence of
          spoken words in a track. The more exclusively speech-like the
          recording (e.g. talk show, audio book, poetry), the closer to 1.0 the
          attribute value. Values above 0.66 describe tracks that are probably
          made entirely of spoken words. Values between 0.33 and 0.66 describe
          tracks that may contain both music and speech, either in sections or
          layered, including such cases as rap music. Values below 0.33 most
          likely represent music and other non-speech-like tracks.
        </li>
        <li>
          <strong>Acousticness</strong>: A confidence measure from 0.0 to 1.0 of
          whether the track is acoustic. 1.0 represents high confidence the
          track is acoustic.
        </li>
        <li>
          <strong>Liveness</strong>: Detects the presence of an audience in the
          recording. Higher liveness values represent an increased probability
          that the track was performed live. A value above 0.8 provides strong
          likelihood that the track is live.
        </li>
        <li>
          <strong>Valence</strong>: A measure from 0.0 to 1.0 describing the
          musical positiveness conveyed by a track. Tracks with high valence
          sound more positive (e.g. happy, cheerful, euphoric), while tracks
          with low valence sound more negative (e.g. sad, depressed, angry).
        </li>
        <li>
          <strong>Instrumentalness</strong>: Predicts whether a track contains
          no vocals. "Ooh" and "aah" sounds are treated as instrumental in this
          context. Rap or spoken word tracks are clearly "vocal". The closer the
          instrumentalness value is to 1.0, the greater likelihood the track
          contains no vocal content. Values above 0.5 are intended to represent
          instrumental tracks, but confidence is higher as the value approaches
          1.0.
        </li>
        <li>
          <strong>Tempo</strong>: The overall estimated tempo of a track in
          beats per minute (BPM). In musical terminology, tempo is the speed or
          pace of a given piece and derives directly from the average beat
          duration.
        </li>
        <p>
          Here's the full spreadsheet containing all the songs, audio features,
          and initial analyses if you'd like to explore everything in one place
          (apologies for the messiness!). I'll walk through and break down the
          different types of analyses in more detail below.
        </p>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6PFIe2A_F7uVDrF_7PS0pbjuInETJI-_n4VmI7aElizuYM4lRWFoJ1MmLVyXsePMj7V3bdtC8jPgv/pubhtml?widget=true&amp;headers=false"
          className="aspect-3/2 w-full"
          alt="kpop generation trends Google Spreadsheet Embed"
        ></iframe>
      </section>
      <section className="content">
        <h3>MEAN COMPARISON OF AUDIO FEATURES</h3>
        <p>
          For each generation, I calculated the average value of Spotify audio
          features across the 15 representative songs. This allowed me to
          identify general trends and shifts in musical characteristics over
          time.
        </p>
        <div className="analysis-grid">
          <div className="image-desc">
            <img
              src={meanduration}
              className="w-full"
              alt="duration mean graph"
            />
            <p>
              Songs have gotten shorter across generations, reflecting broader
              shifts in music consumption (e.g., streaming, TikTok).
            </p>
          </div>
          <div className="image-desc">
            <img src={meankey} className="w-full" alt="key mean graph" />
            <p>
              No drastic changes overall, though it's intriguing that the 2nd
              and 5th generations share a similar mean key. This might explain
              why I'm personally drawn to both generations.
            </p>
          </div>
          <div className="image-desc">
            <img
              src={meanloudness}
              className="w-full"
              alt="loudness mean graph"
            />
            <p>
              Follows an inverted U-shape, peaking in the 2nd generation at
              -3.50 dB, then tapering off — possibly reflecting a shift from
              aggressive mixing to more dynamic range.
            </p>
          </div>
          <div className="image-desc">
            <img src={meantempo} className="w-full" alt="tempo mean graph" />
            <p>
              Gradually increases, peaking in the 3rd generation (125 BPM),
              dipping in the 4th, and slightly rising again in the 5th —
              indicating changing pacing trends.
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <img
            src={meanscale}
            className="w-full md:w-1/2"
            alt="scale mean graph"
          />
        </div>
        <li>
          <strong>Danceability</strong>: Fairly consistent across generations,
          suggesting this trait remains central to K-pop's appeal. However,
          there is a noticeable dip during the 3rd generation, followed by a
          gradual increase through the 4th and 5th generations, reflecting a
          renewed emphasis on rhythm-driven, performance-oriented tracks in
          recent years.
        </li>
        <li>
          <strong>Energy</strong>: Peaked in the 2nd generation (0.86), but
          overall declining — possibly indicating a move from high-intensity
          production to more mellow or experimental sounds.
        </li>
        <li>
          <strong>Mode (Major/Minor)</strong>: Reaches its lowest point in the
          4th generation (0.2), meaning many songs were in a minor key —
          potentially signaling darker, more introspective themes.
        </li>
        <li>
          <strong>Speechiness</strong>: Forms a U-shape; while overall change is
          minimal, some fluctuation could be tied to genre blending with rap or
          spoken elements.
        </li>
        <li>
          <strong>Acousticness</strong>: Peaks in the 3rd generation (0.173),
          suggesting more use of acoustic or stripped-down instrumentation
          during this period.
        </li>
        <li>
          <strong>Instrumentalness</strong>: Generally very low throughout.
        </li>
        <li>
          <strong>Liveness</strong>: Fairly steady across generations,
          suggesting consistent studio production with little variation in
          live-feel elements.
        </li>
        <li>
          <strong>Valence</strong>: Steady decline from 0.81 to 0.61, suggesting
          a move toward moodier or more emotionally complex songs.
        </li>
      </section>
      <section className="content">
        <h3>DISTRIBUTION ANALYSIS VIA CANDLESTICK CHARTS</h3>
        <p>
          I used candlestick charts to visualize the min, interquartile range
          (Q1 to Q3), and max for six key audio features:{" "}
          <strong>Danceability</strong>, <strong>Energy</strong>,{" "}
          <strong>Speechiness</strong>, <strong>Acousticness</strong>,{" "}
          <strong>Liveness</strong>, and <strong>Valence</strong>. This helped
          capture not just the average, but the diversity within each
          generation's sound. Tempo and loudness were analyzed separately using
          their own graphs, as their scales differ from the 0-1 range used by
          the other features.
        </p>
        <div className="analysis-grid">
          <div className="image-desc">
            <img
              src={csduration}
              className="w-full"
              alt="duration candlestick chart"
            />
            <p>
              Still following the overall downward trend in song duration, we
              see a clear outlier in the 4th generation — Younha's "Event
              Horizon." Unlike the typically shorter tracks of its era, this
              emotional rock ballad stands out with one of the longest runtimes
              and was included from the Melon charts due to its massive
              popularity.
            </p>
          </div>
          <div className="image-desc">
            <img src={cskey} className="w-full" alt="key candlestick chart" />
            <p>
              Notably, the 2nd and 5th generations not only share the same mean
              key values but also display nearly identical distributions,
              suggesting a return to earlier tonal preferences in more recent
              music. The 1st, 3rd, and 4th generation, by contrast, has a
              noticeably narrower range, indicating a more limited or cohesive
              use of keys during those periods.
            </p>
          </div>
          <div className="image-desc">
            <img
              src={csloudness}
              className="w-full"
              alt="loudness candlestick chart"
            />
            <p>
              Loudness follows an inverted U-shape. It increases from the 1st to
              the 2nd generation, peaks there, and then gradually decreases
              through the 5th generation. The 5th generation has the narrowest
              interquartile range, suggesting greater consistency in production
              levels and potentially reflecting standardized mastering
              techniques or more uniform loudness normalization practices in
              modern K-pop releases. Additionally, the drop in loudness after
              the 2nd generation may reflect shifting trends toward more dynamic
              range or different production aesthetics that allow for quieter
              passages or more spacious arrangements.
            </p>
          </div>
          <div className="image-desc">
            <img
              src={cstempo}
              className="w-full"
              alt="tempo candlestick chart"
            />
            <p>
              The 1st generation shows the widest tempo range, with the high
              outlier at 186 BPM being Seo Taiji and Boys' "Come Back Home."
              While this track leans more toward rock than mainstream K-pop, it
              was included due to the group's foundational influence on the
              genre. Disregarding this outlier, the 1st generation has the
              lowest overall tempo, highlighting a trend toward slower pacing in
              its core selections compared to later generations. Overall, the
              tempo seems to fluctuate up and down through the generations.
            </p>
          </div>
          <img src={csscale} className="w-full" alt="scale candlestick chart" />
          <div className="content">
            <li>
              <strong>Acousticness (3rd Generation)</strong>: Shows the widest
              range and interquartile distance. This implies the greatest
              diversity in acoustic content — perhaps reflecting genre
              experimentation, unplugged tracks, or mixing of traditional and
              electronic elements.
            </li>
            <li>
              <strong>Liveness (3rd to 5th Generation)</strong>: The
              interquartile range narrows with each generation, suggesting songs
              have become more consistently "studio-polished" and less
              live-sounding.
            </li>
            <li>
              <strong>Valence</strong>: The range expands across generations
              while the median drops, indicating a broader emotional spectrum in
              K-pop music but a general trend toward lower (i.e., sadder or
              moodier) emotional tones.
            </li>
          </div>
        </div>
      </section>
      <section className="content">
        <h3>KEY FREQUENCY ANALYSIS VIA STACKED COLUMN CHART</h3>
        <p>
          To investigate trends in musical key, I created a stacked column chart
          showing how often each key and mode appeared in each generation. This
          revealed both preferences and shifts in tonal choices.
        </p>
        <div className="analysis-grid">
          <div className="content flex-1">
            <img
              src={stackedkey}
              className="w-full"
              alt="key stacked column chart"
            />
            <div className="content">
              <li> F and B are the most commonly used keys overall.</li>
              <li>
                The 1st generation stands out for having the only song in G♯/A♭,
                which happens to be BoA's "No.1," a landmark track that played a
                pivotal role in shaping early K-pop's international presence and
                solidifying BoA's status as a cross-cultural icon.
              </li>
              <li>
                Only the 3rd generation features songs in D♯/E♭ and A,
                suggesting unique key choices that didn't carry over into other
                eras.
              </li>
              <li>
                The 4th generation shows a strong concentration in F♯/G♭,
                indicating a preference for that tonal center.
              </li>
              <li>
                Both the 4th and 5th generations have a notable cluster in B,
                which may reflect a recent trend in composition or vocal range
                preferences.
              </li>
            </div>
          </div>
          <div className="content flex-1">
            <img
              src={stackedmode}
              className="w-full"
              alt="mode stacked column chart"
            />
            <div className="content">
              <li>
                For the 1st, 2nd, 3rd, and 5th generations, major keys are used
                in the majority of songs, with 7-9 tracks per generation falling
                into that category.
              </li>
              <li>
                However, the 4th generation breaks this pattern significantly:
                it features the highest proportion of minor key songs — 12 out
                of 15 — making it the only generation where minor keys clearly
                dominate.
              </li>
              <li>
                This also corroborates the pattern we saw in the mean comparison
                of the mode.
              </li>
              <li>
                This could suggest a stylistic or emotional shift in the 4th
                generation's musical trends, possibly favoring darker, moodier
                tonalities.
              </li>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <h2>WORD ANALYSIS</h2>
        <p>
          I also conducted a word analysis to explore potential lyrical themes
          across generations. I retrieved lyrics for each representative song
          using the LyricsGenius library, which accesses Genius lyrics via API.
          For songs that couldn't be retrieved programmatically, I manually
          sourced the lyrics from the Genius website.
        </p>
        <p>
          I uploaded the lyrics of all 15 representative songs into one corpus
          on Voyant Tools and applied both English and Korean stoplists
          (including a Korean stoplist found online) to filter out common filler
          words. However, the remaining terms were still largely generic in both
          languages. In English, this may be due to the tendency to use simpler
          vocabulary — likely a result of language proficiency considerations
          for Korean artists. Many songs repeated the same basic English words,
          and when more specific or unique words did appear, they were often
          tied to a single song (e.g., "Gee" from Girls' Generation's "Gee",
          "Sorry" from Super Junior's "Sorry Sorry," "Fancy" from TWICE's
          "Fancy," "Antifragile" from LE SSERAFIM's "Antifragile," "Fever" from
          ENHYPEN's "Fever," "Smarter" from LE SSERAFIM's "Smart," or "Guitar"
          from RIIZE's "Get a Guitar"). A clear pattern emerged: the most
          distinctive English word in a song often came directly from its
          English title.
        </p>
        <p>
          While no strong lyrical themes emerged across generations due to the
          small sample size and prevalence of generic words, one noticeable
          trend was the increased presence of English in later generations —
          either through English phrases or full songs. Notably, even fully
          English tracks are still categorized under K-pop, reflecting the
          genre's evolving global identity.
        </p>
      </section>
    </section>
  );
}

export default Analysis;
