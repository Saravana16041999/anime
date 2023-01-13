const Animes = [
    {
        Name : "Naruto",
        catogari : 'Advanture' ,
        rating : '9.5/10',
        info: "Naruto is no doubt a unique ninja within the realms of the Naruto universe. For starters, he has a fox demon sealed inside of him, lives by a diet that mostly consists of ramen, and creates techniques that no one else would ever think to create. There's truly no other shinobi quite like him.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611360/boilerplate/anime/naruto_ovosyj.webp` 
    },

    {
        Name : "Bleach",
        catogari : 'Advanture' ,
        rating : '9.5/10',
        info: "Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/bleach_art7eb.jpg` 
    },
    {
        Name : "One Pice",
        catogari : 'Advanture' ,
        rating : '9.5/10',
        info: "One Piece is the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/One-pice_uuvvyc.jpg` 
    },
    {
        Name : "To-your-eternity",
        catogari : 'Advanture' ,
        rating : '8.5/10',
        info: "A young and lonely unnamed boy and the very first human being Fushi meets in the form of his good longtime wolf friend Joaan. After he dies, Fushi takes his form, often using it as a default appearance. A young girl who adopts Fushi after escaping from a sacrifice ritual.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/to-your-eternity_jnazd8.jpg`
    },
    {
        Name : "Attack on Titans",
        catogari : 'Action' ,
        rating : '9/10',
        info: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human",
        image : 'https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/aot_hoqiik.jpg'
    },
    {
        Name : "Demon Slayer",
        catogari : 'Action' ,
        rating : '9.5/10',
        info: `Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, "Blade of Demon Destruction") is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon.`,
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/demon-slayer_ew5f6c.jpg`
    },

    {
        Name : "One Punch-Man",
        catogari : 'Comady' ,
        rating : '8.5/10',
        info: "Superheroes are everywhere: except Saitama is no ordinary hero. Defeating his enemies with one punch, Saitama has become a bored vigilante in a world that he feels he's become a redundant factor. Will he be able to find the ultimate foe in which he can't beat with a single punch? Only Saitama himself can find out.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611361/boilerplate/anime/Onepunchman_uj98az.jpg`
    },
    {
        Name : "Gintama",
        catogari : 'Comady' ,
        rating : '8.5/10',
        info: "Gintama is a story of a handyman named Gintoki, a samurai with no respect for rules set by the invaders, who's ready to take any job to survive. He and his gang, however, are also among the very few who have not forgotten the morale of a swordsman. Wherever they go, all they do is to create troubles.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611362/boilerplate/anime/gintama_hgmt6v.jpg`
    },
    {
        Name : "Spy X Family",
        catogari : 'Comady' ,
        rating : '8/10',
        info: `Spy × Family is an anime television series based on the manga series of the same title by Tatsuya Endo. Produced by Wit Studio and CloverWorks, the series is directed by Kazuhiro Furuhashi, with character designs by Kazuaki Shimada while Kazuaki Shimada and Kyoji Asano are chief animation directors.`,
        image :`https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611360/boilerplate/anime/Spy-x-Family_wduac2.webp` 
    },
    {
        Name : "Death Note",
        catogari : 'Thriller' ,
        rating : '9/10',
        info: `The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.`,
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611360/boilerplate/anime/deathnote_eonzk4.jpg`
    },
    {
        Name : "Re:Zero",
        catogari : 'Thriller' ,
        rating : '8/10',
        info: `The series tells a story of Natsuki Subaru, a normal young man that lives his normal life in the modern Japan. However, one day, he is summoned to another world. Without knowing the person that summoned him, or the reason for being summoned in the new world, he soon befriends a silver-haired-half-elf girl, Emilia.`,
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611362/boilerplate/anime/re_zero_gcpuqp.jpg`
    },
    {
        Name : "Wethering With You",
        catogari : 'Love' ,
        rating : '8/10',
        info: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611362/boilerplate/anime/weathering_with_you_vhprv1.jpg`
    },
    {
        Name : "Silent Voice",
        catogari : 'Love' ,
        rating : '8/10',
        info: "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption. A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away.",
        image : `https://res.cloudinary.com/dviblvmn1/image/upload/v1673611360/boilerplate/anime/SilentVoice_mfbsd1.jpg` 
    },
]




export default Animes