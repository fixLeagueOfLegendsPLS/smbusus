document.addEventListener('DOMContentLoaded', function () {
    // --- ДАННЫЕ УЧАСТНИКОВ ---

    const teamMembers = [
        {
            name: "Alina Zhumabekova",
            role: "Team Lead / BEng. Materials Science and Engineering ‘26",
            description: "Alina is passionate about applying science to create solutions with real-world impact. She believes that innovation emerges at the intersection of disciplines and actively seeks opportunities to combine ideas from different fields. She is a fourth-year student in Materials Science at Shenzhen MSU-BIT University, where she focuses on both academic research and collaborative projects. Outside her studies, she enjoys running and hiking in the mountains. Her current side quest is leading an iGEM team developing a novel CRISPR-based approach against hepatitis B, driven by the belief that we can design accessible and impactful therapies for diseases that still lack a cure. For her, iGEM is not only about engineering biology, but about connecting science with people, stories, and change."
        },
        {
            name: "Ma Xiaonan",
            role: "Wet Lab / MSc. Nanobiotechnology ‘26",
            description: "Ma Xiaonan is a master student in Nanobiotechnology at Shenzhen MSU-BIT University, and also serves as a wet lab member for the iGEM team. During her undergraduate studies, she focused on marine biology genomics. After graduating, her research shifted to gene editing, with a particular emphasis on CRISPR technology. In addition to synthetic biology, she has a strong interest in medicine and computing, and hopes to pursue a career that combines these areas of interest. Outside of research, she has many passions. She enjoys painting and is enthusiastic about various outdoor activities. Additionally, she likes to play badminton in her spare time. She looks forward to continuing to explore the intersection of synthetic biology and multidisciplinary fields, making more meaningful contributions in the future."
        },
        {
            name: "Zhao Kexing",
            role: "Wet Lab / MSc. Nanobiotechnology ‘26",
            description: "Kexin is a second-year master's student in Nanobiotechnology at Shenzhen MSU-BIT University. As a key member of the iGEM Wet Lab team, she is focusing on the research of CRISPR-Cas gene editing technology and providing technical support for the molecular operations of the team's projects with her solid experimental skills. Her academic experience spans a wide range: from exploring marine biodiversity during her undergraduate studies to delving into the intricacies of synthetic biology, these accumulations have made her accustomed to using interdisciplinary thinking to solve problems in experiments. In the future, her goal is clear and firm: to combine synthetic biology with the medical field and promote the application of gene editing technology in disease treatment. Outside of experiments, she loves nature and animals, and her passion for life sciences permeates every aspect of her life."
        },
        {
            name: "Alisa Filippova",
            role: "Human Practices / BSc. Biology ‘26",
            description: "A final-year biology undergraduate in Shenzhen MSU-BIT University, this year’s Human Practices Lead. She first joined iGEM in 2023 as a freshman and realized that biology isn’t just labs and methods — it’s about people. And she really does love people. Since then, she’s moved toward the places where science meets real life. She already has real laboratory experience and a solid biology foundation, which lets her bridge experiments and public impact. She wants to keep working at the intersection of synthetic biology, bioethics, public health, and education. Outside the project, she volunteers, dances, and enjoys trying new things!"
        },
        {
            name: "Xiong Lingxuan",
            role: "Human Practices / BSc. Biology ‘27",
            description: "Xiong Lingxuan is a third-year Biological Sciences student driven by a conviction that biology must translate into tangible human benefits. She is passionate about building bridges between scientific discovery and everyday life. Beyond the lab, Lingxuan embraces cultural immersion through Chinese calligraphy and music, while traveling and culinary adventures stand as irreplaceable sources of joy in her life journey."
        },
        {
            name: "Zhang Jiahui",
            role: "Human Practices / BSc. Biology ‘27",
            description: "Zhang Jiahui is a third-year Biological Sciences student. She’s captivated by uncovering life’s hidden patterns and mysteries, a process she finds fascinating and deeply rewarding. Driven by a passion for figuring out how life ticks, she hopes her journey in biology will help her make a real difference down the road. When she's not in class or buried in textbooks, Jiahui keeps life colorful. She loves losing herself in the rhythms of music, getting lost in the pages of a good book, and exploring entire universes through movies and anime. And of course, hunting down delicious food to try is her go-to way to enjoy life."
        },
        {
            name: "Zeng Xiaohan",
            role: "Human Practices / BSc. Biology ‘27",
            description: "Zeng Xiaohan is a third-year Biological Sciences student. She is an undergraduate student dedicated to the epigenetic study of Hepatitis B virus (HBV), primarily responsible for synthesizing HBV minichromosomes in vitro to provide a foundation for downstream mechanistic research. In the iGEM project, she contributes to human practices, liaising with hospitals and disease control centers and conducting in-depth interviews to bridge science and public health. Outside of academics, she loves music and plays the piano well, with the focus and patience from music enriching her scientific work."
        },
        {
            name: "Cai Zejun",
            role: "Human Practices / BSc. Biology ‘27",
            description: "Cai Zejun is a third-year Biological Sciences student. He is an undergraduate student focusing on the epigenetic regulation of Hepatitis B virus (HBV), exploring how epigenetic modifications and effector proteins influence the structure of HBV minichromosomes. In the iGEM project, he is responsible for human practices, conducting surveys, outreach, and educational activities to raise awareness about HBV prevention and bridge the gap between scientific research and public health. Outside the lab, he enjoys sports, especially basketball, believing that staying active helps maintain energy and health — a mindset that also drives his persistence in scientific research."
        },
        {
            name: "Vasilii Talachanov",
            role: "Designer, HP, Wiki / BSc. Biology ‘27",
            description: "A third-year biology undergraduate in Shenzhen MSU-BIT University. Vasilii has a passion for cytology and bioengineering. These sciences inspire him greatly. He is the Lead Designer of the project. As a designer, Vasilii is responsible for creating posters, brochures, promotional videos, and a website. In addition to his design work, he actively engages in Human Practices by seeking out participants for interviews and assisting with filming. In his free time, Vasilii enjoys drawing, studying Chinese and just being fancy."
        },
        {
            name: "Zhao Mingze",
            role: "Media and Outreach / BSc. Biology ‘26",
            description: "Mingze is passionate about the convergence of biology and intelligent engineering. He believes that by fusing robotics, AI, and advanced additive manufacturing, we can architect transformational solutions for global challenges in health and logistics. He is particularly focused on building the complete pipeline for autonomous systems—from designing drone structures and flight controller PCBs from scratch to developing the sophisticated navigation and path-planning algorithms that give them life. This deep technical stack is applied to tangible, moonshot projects, including UAVs for transporting biological agents and an AI-powered system for patient rehabilitation , complemented by his research in LLM-driven robotics. Outside of the lab, Mingze is a competitive street hockey player and a certified referee for both ice hockey and aerospace models. This passion for precision and strategy in dynamic environments complements his engineering focus, driving him to think about building robust, real-world systems."
        },
        {
            name: "Polina Vasilevskaia",
            role: "Media / BSc. Biology ‘28",
            description: "Polina is a second-year Biology student at Shenzhen MSU-BIT University. Passionate about science, she strives to apply her knowledge to develop meaningful solutions with real-world impact. Beyond academics, Polina enjoys horseback riding and archery, which help her maintain a balance between her studies and active relaxation. As part of the project, she manages social media platforms, including Instagram, where she showcases the team’s progress in developing hepatitis B treatments and shares vital prevention strategies."
        },
        {
            name: "Egor Nikitin",
            role: "Entrepreneurship / BSc. Economics ‘28",
            description: "Deeply motivated by the intersection of biotechnology and entrepreneurship, he took the lead in designing and writing the complete business plan for the team's project. His focus was on translating complex scientific ideas into a clear commercial vision—defining market opportunities, competitive positioning, and strategies for growth. He is driven by the belief that innovative biotech solutions can reshape global health outcomes, and he thrives at the point where science meets strategy. Outside of work, he enjoys exploring new cultures, doing sports by leading and playing for the university football team, learning about emerging technologies, and finding creative ways to connect people and ideas toward a shared goal."
        },
        {
            name: "Iudicheva Valeriia",
            role: "Wiki / BSc. Applied Mathematics & CS ‘26",
            description: "A passionate problem-solver at the intersection of advanced mathematics and computational innovation, she excels at translating complex theoretical concepts into practical, efficient solutions. Her strength lies in building a bridge between abstract analytical models and tangible algorithmic applications, ensuring the team's technical projects are both rigorous and implementable. She is driven by the belief that interdisciplinary collaboration is key to tackling future global challenges in fields like FinTech and digital assets. Outside of academics, her experience as an \"Outstanding Student\" and \"Outstanding Volunteer\" highlights her leadership and commitment to community, while her international studies in China have fostered a collaborative spirit essential for diverse teams. She thrives on connecting logical precision with creative execution to achieve shared goals."
        },
        {
            name: "Nikita Bondarchuk",
            role: "Wiki / BSc. Applied Mathematics & CS ‘27",
            description: "Nikita maintains the team wiki — keeping pages current, structured, and fast—and focuses on low-level programming and cybersecurity: C/ASM, OS internals, small system utilities, defensive coding, and RE basics."
        }
    ];

    const advisors = [
        { name: "Sun Ruijia", role: "Advisor", description: "" },
        { name: "Tong Youxi", role: "Advisor", description: "" },
        { name: "Gleb Skorokhodov", role: "Advisor", description: "" }
    ];

    const pis = [
        { name: "Glukhov Grigory", role: "Primary PI", description: "" },
        { name: "Shi Xiangyan", role: "Secondary PI", description: "" }
    ];

    // --- ФУНКЦИЯ ГЕНЕРАЦИИ КАРТОЧЕК ---

    function createMemberCard(member) {
        const fileName = member.name.toLowerCase().replace(/\s+/g, '-');
        const imageUrl = `https://static.igem.wiki/teams/5861/members/${fileName}.webp`;
        const placeholderUrl = `https://placehold.co/500x600/003ea0/ffffff?text=${member.name.split(' ')[0]}`;

        const card = document.createElement('div');
        card.className = 'member-card';

        // Собираем HTML-код для карточки
        let cardHTML = `
            <div class="member-card-visible">
                <img src="${imageUrl}" class="member-photo" alt="Photo of ${member.name}" onerror="this.onerror=null;this.src='${placeholderUrl}';">
                <div class="member-overlay">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                </div>
            </div>`;

        // >>> UPDATED: Добавляем раскрывающийся блок, только если есть описание
        if (member.description && member.description.trim() !== '') {
            cardHTML += `
            <div class="member-card-expanded">
                <p class="member-bio">${member.description}</p>
            </div>`;
        }

        card.innerHTML = cardHTML;
        return card;
    }

    // --- ЗАПОЛНЕНИЕ СЕКЦИЙ ---

    const teamGrid = document.getElementById('team-members-grid');
    const advisorsGrid = document.getElementById('advisors-grid');
    const pisGrid = document.getElementById('pis-grid');

    if (teamGrid) {
        teamMembers.forEach(member => {
            teamGrid.appendChild(createMemberCard(member));
        });
    }

    if (advisorsGrid) {
        advisors.forEach(advisor => {
            advisorsGrid.appendChild(createMemberCard(advisor));
        });
    }

    if (pisGrid) {
        pis.forEach(pi => {
            pisGrid.appendChild(createMemberCard(pi));
        });
    }
});