// JavaScript for dynamic contents and interactions

const tricksData = [
    {
        title: "とにかく話しかけてみよう（基本のキ）",
        desc: "まずは難しく考えず、チャットするような感覚で簡単な質問を投げてみましょう。",
        prompt: "〇〇について、初心者にもわかるように丁寧に教えてください。"
    },
    {
        title: "「こんな感じで」と見本を渡す",
        desc: "AIも人間と同じです。お手本があると、その雰囲気に合わせて答えてくれます。",
        prompt: "以下のメールを見本にして、私が新しく購入した商品を開封した感想を送るメールを、同じような明るい雰囲気で書いてください。\n\n【見本】\nいつもお世話になっております。先日は素敵なプレゼントをありがとうございました！とても嬉しくて、早速使わせていただきました！"
    },
    {
        title: "「順番に考えて」とお願いする",
        desc: "複雑なお願いでも、ステップを分けるとAIが整理して答えてくれます。",
        prompt: "次の順番で考えて答えてください。\n① 京都の春のおすすめスポットを3つ挙げる\n② その3つのスポットを効率よく回る1日のルートを考える\n③ そのルートを楽しむための持ち物を提案する"
    },
    {
        title: "「なぜそう考えたか」の理由も教える",
        desc: "あなたの考え方を見本として渡すと、プロ顔負けの分析をしてくれます。",
        prompt: "私は「駅から近いから」という理由でAのレストランを選びました。この考え方（立地の良さ）を重視して、Bのエリアでのおすすめカフェを2つ提案してください。"
    },
    {
        title: "何度か聞いて、お気に入りを選ぶ",
        desc: "AIは毎回少し違う答えを出します。ピンとこなければ、もう一度同じ質問をしてみましょう。",
        prompt: "（同じプロンプトを何度か入力し直したり、「回答の別案を表示」ボタンを使ったりするだけ！）"
    },
    {
        title: "３つの案を出して「いいとこ・悪いとこ」を比べる",
        desc: "アイデア出しや判断に迷った時に、比較できる形でもらうと選びやすくなります。",
        prompt: "沖縄への旅行手段について、3つの案（飛行機、フェリーなど）を挙げ、それぞれのメリットとデメリットを教えてください。"
    },
    {
        title: "まずはGeminiに「下調べ」をお願いする",
        desc: "いきなり答えを求めず、まずは前提知識をまとめてもらってから深掘りすると回答が深まります。",
        prompt: "まずは「NISA」についての基礎知識を200文字程度で簡単にまとめてください。その後に、私が理解できたか確認するための○×クイズを3問出してください。"
    },
    {
        title: "「調べて、考えて」を繰り返してもらう",
        desc: "深く考えたい時に、対話をしながら少しずつ情報を整理していく方法です。",
        prompt: "（Geminiの答えに対して）\n「なるほど。ではその中で登場した〇〇という言葉について、もう少し詳しく説明して。そして、それを私の生活にどう活かせるか教えて。」"
    },
    {
        title: "何度でもやり直しOK！会話しながら磨き上げる",
        desc: "一発で完璧を目指さず、「ここ直して」とやり取りして完成に近づけます。",
        prompt: "今のあなたの回答を、もっと明るく優しい言葉遣いに書き直して。専門用語は使わずに、小学生でもわかる言葉にしてね。"
    },
    {
        title: "ルールを決めて、箇条書きでスッキリ伝える",
        desc: "項目を分けることで、AIが正確に指示を守りやすくなります。",
        prompt: "以下の条件で、ブログ記事のタイトル案を5つ考えてください。\n\n【テーマ】おうちでできる簡単ストレッチ\n【ターゲット】運動不足の40代女性\n【文字数】15文字以内\n【トーン】明るく、思わずやってみたくなるような雰囲気"
    },
    {
        title: "大きい見出し・小さい見出しで整理してお願いする",
        desc: "記号（# や - など）を使って階層を分けると、AIは複雑な指示も難なくこなします。",
        prompt: "# 目的\n町内会の秋祭りの案内状を作成する\n\n## 必要な情報\n- 日時：10月15日 10時〜15時\n- 場所：〇〇公園\n- 持ち物：お飲み物\n\n## 注意点\n- カドが立たない丁寧な言葉遣い\n- お年寄りにもわかりやすい大きな字で印刷することを想定した短い文章"
    }
];

const ideasData = [
    {
        icon: "fa-utensils",
        category: "お料理",
        title: "冷蔵庫の余り物で乗り切る！",
        desc: "「冷蔵庫に『豚肉・キャベツ・卵』があります。これで、15分で作れるカンタンおかずのレシピを3つ教えて。洗い物も少なくしたいです。」"
    },
    {
        icon: "fa-envelope-open-text",
        category: "ご近所・お付き合い",
        title: "カドが立たない上手な言い回し",
        desc: "「町内会の役員交代のお知らせ文を作りたいです。ご近所さんに配るので、カドが立たず、あたたかみのある丁寧な言葉で書いてください。」"
    },
    {
        icon: "fa-map-location-dot",
        category: "お出かけ",
        title: "無理なく楽しむ旅行プラン",
        desc: "「今度の休み、50代夫婦で箱根へ1泊2日の旅行に行きます。歩き疲れなくて、美味しい和食が食べられるおすすめのコースを考えて。」"
    },
    {
        icon: "fa-seedling",
        category: "趣味・健康",
        title: "ちょっとした困りごとの相談相手に",
        desc: "「プランターでミニトマトを育て始めたのですが、下の方の葉っぱが黄色くなってきました。原因として考えられることと、対処法を教えて。」"
    }
];

const promisesData = [
    {
        icon: "fa-user-shield",
        title: "個人情報やパスワードは絶対に教えない！",
        desc: "Geminiは安全ですが、念のためあなたの本名や住所、クレジットカード番号やパスワードなどの「知られたら困る秘密の情報」は入力しないようにしましょう。"
    },
    {
        icon: "fa-triangle-exclamation",
        title: "Geminiも時々「ウソ」をつくことがあると知っておく",
        desc: "AIは一生懸命答えますが、たまに間違ったことをもっともらしく言うことがあります。大事な調べ物は、最終的には人間の目で確認するクセをつけると安心です。"
    },
    {
        icon: "fa-face-smile-beam",
        title: "変なことを聞いちゃっても壊れないから大丈夫！",
        desc: "「AIって難しそう。間違ったボタンを押したら壊れちゃうんじゃ…」そんな心配は無用です！どんな質問をしてもスマートフォンやパソコンが爆発したりはしません。気軽におしゃべりを楽しみましょう。"
    }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {

    // Render Tricks
    const tricksContainer = document.getElementById('tricks-container');
    tricksData.forEach((trick, index) => {
        const div = document.createElement('div');
        div.className = 'trick-item';
        div.innerHTML = `
            <div class="trick-title">
                <span class="trick-number">${index + 1}</span> ${trick.title}
            </div>
            <p>${trick.desc}</p>
            <div class="prompt-box">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div class="prompt-label" style="margin-bottom: 0;">使い方の例</div>
                    <button class="copy-btn" data-text="${trick.prompt}">
                        <i class="fa-regular fa-copy"></i> コピー
                    </button>
                </div>
                <div class="prompt-text">${trick.prompt}</div>
            </div>
        `;
        tricksContainer.appendChild(div);
    });

    // Render Ideas
    const ideasContainer = document.getElementById('ideas-container');
    ideasData.forEach(idea => {
        const div = document.createElement('div');
        div.className = 'idea-card';
        div.innerHTML = `
            <div class="idea-image">
                <i class="fa-solid ${idea.icon}"></i>
            </div>
            <div class="idea-content">
                <span class="idea-category">${idea.category}</span>
                <h3 class="idea-title">${idea.title}</h3>
                <div class="prompt-box">
                    <div style="display: flex; justify-content: flex-end; margin-bottom: 0.5rem;">
                         <button class="copy-btn" data-text="${idea.desc.replace(/['"]+/g, '')}">
                            <i class="fa-regular fa-copy"></i> コピー
                        </button>
                    </div>
                    <div class="prompt-text">${idea.desc}</div>
                </div>
            </div>
        `;
        ideasContainer.appendChild(div);
    });

    // Render Promises
    const promisesContainer = document.getElementById('promises-container');
    promisesData.forEach(promise => {
        const div = document.createElement('div');
        div.className = 'promise-card';
        div.innerHTML = `
            <div class="promise-icon"><i class="fa-solid ${promise.icon}"></i></div>
            <div class="promise-content">
                <h3>${promise.title}</h3>
                <p>${promise.desc}</p>
            </div>
        `;
        promisesContainer.appendChild(div);
    });

    // Navigation Logic
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.page-section');
    const navBtns = document.querySelectorAll('.nav-btn');

    function navigateTo(targetId) {
        // Hide all sections
        sections.forEach(sec => sec.style.display = 'none');
        // Update nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo(0, 0);
        }

        // Update active nav link
        const targetLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    // Nav Links Click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateTo(targetId);
            // スマホ版でリンクを押したらメニューを閉じる
            document.querySelector('.nav-links').classList.remove('active-menu');
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active-menu');
        });
    }

    // Button Click
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                navigateTo(targetId);
            }
        });
    });

    // Copy to clipboard functionality
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.getAttribute('data-text');
            try {
                await navigator.clipboard.writeText(textToCopy);
                showToast();
            } catch (err) {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers could go here
            }
        });
    });

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
});
