const seerahEntries = [
    {
        title: "Hijrah to Madinah",
        story: "When the Prophet ﷺ and Abu Bakr (RA) left Makkah, they hid in the Cave of Thawr for 3 days. This showed deep trust in Allah during hardship.",
        sunnah: "Travel with righteous companionship.",
        link: "https://yaqeeninstitute.org/video/the-hijrah-of-the-prophet",
        quiz: {
            question: "What city did the Prophet ﷺ migrate to after Makkah?",
            options: ["Taif", "Jerusalem", "Madinah", "Basra"],
            correctIndex: 2
        }
    },
    {
        title: "Fatimah al-Fihri",
        story: "Fatimah al-Fihri, a Muslim woman from Kairouan, founded the University of al-Qarawiyyin in 859 CE — widely considered the world's oldest continuously operating university.",
        sunnah: "Seeking knowledge is a duty upon every Muslim (Sunan Ibn Majah 224).",
        link: "https://sunnah.com/ibnmajah:224",
        quiz: {
            question: "Where did Fatimah al-Fihri found the world's first university?",
            options: ["Cairo", "Fez", "Baghdad", "Cordoba"],
            correctIndex: 1
        }
    },
    {
        title: "Bilal ibn Rabah",
        story: "Bilal (RA), once enslaved and tortured for his faith, was chosen by the Prophet ﷺ as the first mu'adhin — the first person to call Muslims to prayer. His voice rang out over Makkah on the day of its conquest.",
        sunnah: "Stay firm in your faith, even during hardship.",
        link: "https://yaqeeninstitute.org/read/paper/honoring-blackness-part-1-bilal-ibn-rabah",
        quiz: {
            question: "Who was the first person to call the adhan (Islamic call to prayer)?",
            options: ["Umar (RA)", "Ali (RA)", "Bilal (RA)", "Abu Bakr (RA)"],
            correctIndex: 2
        }
    },
    {
        title: "A Smile is Charity",
        story: "The Prophet ﷺ said: 'Smiling at your brother is an act of charity.' Even the smallest act done with sincerity carries great reward in Islam.",
        sunnah: "Greet others with a warm face and a kind word.",
        link: "https://sunnah.com/tirmidhi:1956",
        quiz: {
            question: "What simple act did the Prophet ﷺ describe as a form of charity?",
            options: ["Praying silently", "Smiling", "Nodding", "Fasting"],
            correctIndex: 1
        }
    },
    {
        title: "The Battle of Khandaq",
        story: "When a coalition of tribes marched on Madinah, Salman al-Farisi (RA) suggested digging a trench around the city — a Persian strategy unknown to the Arabs. The trench held, and the enemy retreated after weeks of failure.",
        sunnah: "Take smart action and rely on Allah for the outcome.",
        link: "https://quran.com/33/9-27",
        quiz: {
            question: "Who suggested digging a trench at the Battle of Khandaq?",
            options: ["Umar (RA)", "Khalid ibn al-Walid (RA)", "Salman al-Farisi (RA)", "Ali (RA)"],
            correctIndex: 2
        }
    },
    {
        title: "The Battle of Badr",
        story: "At Badr, 313 Muslims faced an army of over 1,000. Despite being outnumbered, Allah granted the believers a decisive victory — a turning point that established the Muslim community in Madinah.",
        sunnah: "Place full trust in Allah when facing hardship.",
        link: "https://quran.com/3/123",
        quiz: {
            question: "How many Muslims fought at the Battle of Badr?",
            options: ["313", "1,000", "150", "500"],
            correctIndex: 0
        }
    },
    {
        title: "Khadijah (RA) — First Believer",
        story: "When the first revelation came and the Prophet ﷺ trembled with fear, it was Khadijah (RA) who wrapped him in a cloak and reassured him. She was the first person to accept Islam — his greatest supporter and the love of his life.",
        sunnah: "Be a source of comfort and reassurance for those you love.",
        link: "https://yaqeeninstitute.org/read/paper/khadijah-bint-khuwaylid",
        quiz: {
            question: "Who was the first person to accept Islam?",
            options: ["Abu Bakr (RA)", "Ali (RA)", "Khadijah (RA)", "Umar (RA)"],
            correctIndex: 2
        }
    },
    {
        title: "The Year of Sorrow",
        story: "In one year, the Prophet ﷺ lost both his beloved wife Khadijah (RA) and his uncle Abu Talib — his two greatest protectors. He called it 'Aam al-Huzn', the Year of Sorrow. Yet he never stopped his mission.",
        sunnah: "Grief is not weakness — patience in loss is among the highest virtues.",
        link: "https://yaqeeninstitute.org/read/paper/the-year-of-grief",
        quiz: {
            question: "What did the Prophet ﷺ call the year he lost Khadijah and Abu Talib?",
            options: ["Year of Light", "Year of Sorrow", "Year of Patience", "Year of Trial"],
            correctIndex: 1
        }
    },
    {
        title: "The Treaty of Hudaybiyyah",
        story: "The Treaty of Hudaybiyyah seemed like a defeat — the Muslims were turned away from Makkah and agreed to seemingly unfair terms. Yet Allah called it 'a clear victory' in the Quran. Two years later, Makkah opened its gates.",
        sunnah: "Trust Allah's plan even when you cannot see the wisdom in it.",
        link: "https://quran.com/48/1",
        quiz: {
            question: "What did Allah call the Treaty of Hudaybiyyah in the Quran?",
            options: ["A great test", "A clear victory", "A necessary sacrifice", "A moment of patience"],
            correctIndex: 1
        }
    },
    {
        title: "The Conquest of Makkah",
        story: "When the Prophet ﷺ entered Makkah victorious with 10,000 companions, he declared a general amnesty. Those who had persecuted, tortured, and exiled the Muslims were forgiven. He asked only: 'Go, for you are free.'",
        sunnah: "Forgive when you have the power to punish — that is the highest character.",
        link: "https://yaqeeninstitute.org/read/paper/the-conquest-of-mecca",
        quiz: {
            question: "What did the Prophet ﷺ declare when he conquered Makkah?",
            options: ["A day of revenge", "A general amnesty", "A new tax", "A day of fasting"],
            correctIndex: 1
        }
    },
    {
        title: "Uwais al-Qarni",
        story: "Uwais al-Qarni never met the Prophet ﷺ in person — he stayed home to care for his elderly mother. Yet the Prophet ﷺ said of him: 'The best of the Tabi'in is a man called Uwais.' His devotion to his mother earned him a rank few companions reached.",
        sunnah: "Serving your parents is worship — do not underestimate it.",
        link: "https://sunnah.com/muslim:2542",
        quiz: {
            question: "Why did Uwais al-Qarni never meet the Prophet ﷺ?",
            options: ["He lived too far away", "He cared for his elderly mother", "He was imprisoned", "He did not know about Islam"],
            correctIndex: 1
        }
    },
    {
        title: "Sumayyah bint Khayyat",
        story: "Sumayyah (RA) was the first martyr in Islam. Enslaved and tortured by Abu Jahl for her belief, she refused to renounce her faith. The Prophet ﷺ passed by her family as they were being tortured and said: 'Patience, O family of Yasir — your appointment is in Paradise.'",
        sunnah: "Conviction in truth is worth more than comfort in silence.",
        link: "https://yaqeeninstitute.org/read/paper/the-first-martyr-sumayyah",
        quiz: {
            question: "Who is considered the first martyr in Islam?",
            options: ["Khadijah (RA)", "Fatimah (RA)", "Sumayyah (RA)", "Asiya (RA)"],
            correctIndex: 2
        }
    }
    ];
 