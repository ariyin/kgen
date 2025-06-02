import lyricsgenius
import os

GENIUS_API_TOKEN = os.getenv("GENIUS_API_TOKEN")
genius = lyricsgenius.Genius(GENIUS_API_TOKEN)
genius.skip_non_songs = True
genius.excluded_terms = ["(Remix)", "(Live)"]
genius.remove_section_headers = True  # Remove [Chorus], [Verse], etc.

# (Song Name, Artist Name)
# song_list = [
#     ("Come Back Home", "Seo Taiji and Boys"),
#     ("CANDY", "H.O.T."),
#     ("('Cause) I'm Your Girl", "S.E.S."),
#     ("To My Boyfriend", "Fin.K.L"),
#     ("Couple", "SECHSKIES"),
#     ("1Tym", "1TYM"),
#     ("Dreams Come True", "S.E.S."),
#     ("Get Up", "Baby V.O.X"),
#     ("T.O.P. (Twinkling Of Paradise)", "SHINHWA"),
#     ("Coming of age ceremony", "Park Jiyoon"),
#     ("거짓말", "god"),
#     ("No.1", "BoA"),
#     ("Perfect Man", "SHINHWA"),
#     ("Bad Man", "Rain"),
#     ("Champion", "PSY"),
# ]

# song_list = [
#     ("10 Minutes", "Lee Hyori"),
#     ("Tell Me", "Wonder Girls"),
#     ("Haru Haru", "BIGBANG"),
#     ("Replay", "SHINee"),
#     ("MIROTIC", "TVXQ!"),
#     ("Gee", "Girls' Generation"),
#     ("쏘리 쏘리 Sorry, Sorry", "Super Junior"),
#     ("Abracadabra", "Brown Eyed Girls"),
#     ("Bad Girl Good Girl", "miss A"),
#     ("I Am The Best", "2NE1"),
#     ("Trouble Maker", "Trouble Maker"),
#     ("Gangnam Style", "PSY"),
#     ("Miniskirt", "AOA"),
#     ("Mr. Chu", "Apink"),
#     ("Touch my body", "SISTAR"),
# ]

# song_list = [
#     ("Growl", "EXO"),
#     ("200%", "AKMU"),
#     ("Eyes, Nose, Lips", "TAEYANG"),
#     ("Up & Down", "EXID"),
#     ("HERO", "MONSTA X"),
#     ("VERY NICE", "SEVENTEEN"),
#     ("REALLY REALLY", "WINNER"),
#     ("Red Flavor", "Red Velvet"),
#     ("DNA", "BTS"),
#     ("BBoom BBoom", "MOMOLAND"),
#     ("LOVE SCENARIO", "iKON"),
#     ("DDU-DU DDU-DU", "BLACKPINK"),
#     ("SHINE", "PENTAGON"),
#     ("Regular", "NCT 127"),
#     ("FANCY", "TWICE"),
# ]

# song_list = [
#     ("Bon Bon Chocolat", "EVERGLOW"),
#     ("Any song", "ZICO"),
#     ("WANNABE", "ITZY"),
#     ("Event Horizon", "Younha"),
#     ("God's Menu", "Stray Kids"),
#     ("Dynamite", "BTS"),
#     ("FEVER", "ENHYPEN"),
#     ("Next Level", "aespa"),
#     ("0X1=LOVESONG (I Know I Love You)", "TOMORROW X TOGETHER"),
#     ("LOVE DIVE", "IVE"),
#     ("ANTIFRAGILE", "LE SSERAFIM"),
#     ("Ditto", "NewJeans"),
#     ("Fighting (Feat. Lee Young Ji)", "BSS"),
#     ("Cupid - Twin Version", "FIFTY FIFTY"),
#     ("Queencard", "i-dle"),
# ]

# song_list = [
#     ("In Bloom", "ZEROBASEONE"),
#     ("Get A Guitar", "RIIZE"),
#     ("plot twist", "TWS"),
#     ("Fate", "i-dle"),
#     ("Smart", "LE SSERAFIM"),
#     ("Magnetic", "ILLIT"),
#     ("SHEESH", "BABYMONSTER"),
#     ("Earth, Wind & Fire", "BOYNEXTDOOR"),
#     ("Girls Never Die", "tripleS"),
#     ("Supernova", "aespa"),
#     ("Igloo", "KISS OF LIFE"),
#     ("APT.", "Rose, Bruno Mars"),
#     ("The Chase", "Hearts2Hearts"),
#     ("I DO ME", "KiiKii"),
#     ("Sign", "izna"),
# ]

song_list = [
    ("Dynamite", "BTS"),
    ("DNA", "BTS"),
]

output_folder = "lyrics"
os.makedirs(output_folder, exist_ok=True)

lyrics_dict = {}

for title, artist in song_list:
    try:
        song = genius.search_song(title, artist)
        if song and song.lyrics:
            lyrics = song.lyrics.strip()
            lyrics_dict[f"{title} - {artist}"] = lyrics
            
            # Save to a .txt file
            file_name = f"{title} - {artist}.txt".replace("/", "_")
            with open(os.path.join(output_folder, file_name), "w", encoding="utf-8") as f:
                f.write(lyrics)
            print(f"✅ Got lyrics for: {title} - {artist}")
        else:
            print(f"❌ Lyrics not found for: {title} - {artist}")
    except Exception as e:
        print(f"⚠️ Error for {title} - {artist}: {e}")