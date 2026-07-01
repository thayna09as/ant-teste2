<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ANT - Sistema de Gestão</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- 1. TELA INICIAL (LANDING PAGE) -->
    <div id="landing" class="page active" style="flex-direction: column;">
        <header class="landing-header" style="width: 100%; background: rgba(0,0,0,0.1)">
            <div class="brand" style="color: white; margin: 0;">ANT</div>
            <button class="btn-primary" onclick="showPage('login')">Acessar Pro Ativo</button>
        </header>
        <main class="landing-main" style="flex: 1; padding: 50px;">
            <h1 style="font-size: 3rem; margin-bottom: 20px;">Olá, Empreendedor!</h1>
            <p style="margin-bottom: 30px;">Automatize seus processos e transforme a realidade financeira do seu negócio.</p>
            <button class="btn-large" onclick="showPage('login')">Entrar no Painel</button>
        </main>
    </div>

    <!-- 2. TELA DE LOGIN -->
    <div id="login" class="page class login-container">
        <div class="login-card">
            <h2>Login ANT</h2>
            <form onsubmit="handleLogin(event)">
                <div class="input-group">
                    <label>E-mail</label>
                    <input type="email" required placeholder="seu@email.com">
                </div>
                <div class="input-group">
                    <label>Senha</label>
                    <input type="password" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn-login">Entrar</button>
            </form>
        </div>
    </div>

    <!-- 3. TELA DO DASHBOARD (IMAGEM ENVIADA) -->
    <div id="dashboard" class="page dashboard-container">
        <!-- Sidebar Esquerda -->
        <aside class="sidebar">
            <div class="brand">🐜 ANT</div>
            <ul class="menu-items">
                <li class="active" onclick="switchTab(this, 'inicio')">Início</li>
                <li onclick="switchTab(this, 'minha-dre')">Minha DRE</li>
                <li onclick="switchTab(this, 'estoque')">Estoque</li>
                <li onclick="switchTab(this, 'assistente-ia')">Assistente IA</li>
                <li onclick="switchTab(this, 'saude-negocio')">Saúde Negócio</li>
                <li onclick="switchTab(this, 'radar-pro')">Radar PRO</li>
                <li onclick="switchTab(this, 'capacitacao')">Capacitação</li>
                <li onclick="switchTab(this, 'perfil')">Perfil</li>
            </ul>
            <div class="menu-items">
                <li onclick="switchTab(this, 'ajustes')">Ajustes</li>
            </div>
        </aside>

        <!-- Conteúdo Principal à Direita -->
        <main class="main-content">
            <div id="dynamic-view">
                <!-- Cabeçalho de Boas-Vindas -->
                <div class="content-header">
                    <div>
                        <h1 style="font-size: 24px;">Olá, Empreendedor! 👋</h1>
                        <small style="color: var(--text-muted)">ANT: Automate and Transform</small>
                    </div>
                    <button class="btn-pro">👑 ACESSO PRO ATIVO</button>
                </div>

                <!-- Banner Dica do Dia -->
                <div class="tip-banner">
                    <span style="font-size: 24px;">💡</span>
                    <div>
                        <strong>DICA ANT DO DIA</strong><br>
                        <small>Separe as contas pessoais das profissionais hoje. Organização financeira é o alicerce do seu crescimento. - Anty</small>
                    </div>
                </div>

                <!-- Grid de Métricas Financeiras -->
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-header"><span>Receita Total</span> <span class="badge-up">+12%</span></div>
                        <div class="card-value">R$ 12.450,00</div>
                    </div>
                    <div class="card">
                        <div class="card-header"><span>Despesas</span> <span class="badge-down">-5%</span></div>
                        <div class="card-value">R$ 4.200,00</div>
                    </div>
                    <div class="card">
                        <div class="card-header"><span>Lucro Liquido</span> <span class="badge-up">+18%</span></div>
                        <div class="card-value">R$ 8.250,00</div>
                    </div>
                    <div class="card">
                        <div class="card-header"><span>Impactos Marketing</span> <span class="badge-up">+34%</span></div>
                        <div class="card-value">R$ 5.950,00</div>
                    </div>
                </div>

                <!-- Blocos Inferiores (DRE e Marketing) --
                <div class="bottom-grid">
                    <!-- Bloco DRE -->
                    <div class="section-box">
                        <div class="section-title">
                            <span>DRE SIMPLIFICADA</span>
                            <a href="#" style="color: var(--primary); font-size: 14px; text-decoration: none;">Ver Completa </a>
                        </div>
                        <div class="row-data" style="background-color: #f1f3f5;">
                            <span>Faturamento Bruto</span>
                            <strong>R$ 12.450</strong>
                        </div>
                        <div class="row-data row-bg-green">
                            <span>LUCRO OPERACIONAL</span>
                            <strong>R$ 10.350</strong>
                        </div>
                    </div>

                    <!-- Bloco Marketing -->
                    <div class="section-box">
                        <div class="section-title">Seu Marketing Inteligente</div>
                        <p style="color: var(--text-muted); font-size: 14px; min-height: 50px;">
                            Crie roteiros para Reels e posts profissionais baseados nas tendencias da sua rua.
                        </p>
                        <button class="btn-purple" onclick="gerarConteudoIA()">Gerar Conteudo com IA</button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>
