// ============================================
// DADOS DAS CIDADES E BAIRROS
// ============================================

export interface Location {
  slug: string;
  name: string;
  type: 'city' | 'neighborhood';
  region: string;
  description: string;
  services: string[];
  neighborhoods?: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

// ============================================
// CIDADES DA REGIÃO METROPOLITANA DE CURITIBA
// ============================================
export const cities: Location[] = [
  {
    slug: 'curitiba',
    name: 'Curitiba',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Curitiba é a capital do Paraná e uma das cidades mais planejadas do Brasil. Com excelente qualidade de vida, a cidade oferece infraestrutura completa, áreas verdes abundantes e oportunidades de moradia em diversos bairros.',
    services: ['Casas pré-fabricadas', 'Projetos personalizados', 'Construção rápida', 'Financiamento próprio'],
    neighborhoods: ['Batel', 'Água Verde', 'Boqueirão', 'CIC', 'Santa Felicidade'],
    seoTitle: 'Casas Pré-Fabricadas em Curitiba - Casas Pinheirão',
    seoDescription: 'Compre sua casa pré-fabricada em Curitiba com a Casas Pinheirão. Entrega rápida, qualidade garantida e financiamento facilitado. Modelos a partir de R$ 150.000.',
    seoKeywords: ['casas pré-fabricadas curitiba', 'casas prontas curitiba', 'construção rápida curitiba', 'casas baratas curitiba']
  },
  {
    slug: 'almirante-tamandaré',
    name: 'Almirante Tamandaré',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Almirante Tamandaré é uma cidade em crescimento na região metropolitana, oferecendo tranquilidade e proximidade com a capital. Ideal para quem busca qualidade de vida com custos mais acessíveis.',
    services: ['Casas pré-fabricadas', 'Montagem inclusa', 'Projetos econômicos', 'Atendimento personalizado'],
    seoTitle: 'Casas Pré-Fabricadas em Almirante Tamandaré - Entrega Rápida',
    seoDescription: 'Sua casa dos sonhos em Almirante Tamandaré. Casas pré-fabricadas com preço justo e qualidade superior. Financiamento facilitado.',
    seoKeywords: ['casas almirante tamandaré', 'casa pré-fabricada', 'construção rápida', 'financiamento facilitado']
  },
  {
    slug: 'araucária',
    name: 'Araucária',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Araucária é conhecida como a capital do carvão e possui forte polo industrial. A cidade oferece excelentes oportunidades de moradia com infraestrutura completa e acesso facilitado à Curitiba.',
    services: ['Casas modulares', 'Construção sustentável', 'Projetos industrializados', 'Entrega express'],
    seoTitle: 'Casas Pré-Fabricadas em Araucária PR - Casas Pinheirão',
    seoDescription: 'Compre sua casa pré-fabricada em Araucária com a melhor construtora. Modelos modernos, preços acessíveis e entrega em até 45 dias.',
    seoKeywords: ['casas araucária', 'casas pré-fabricadas araucária', 'construção industrial', 'casa pronta araucária']
  },
  {
    slug: 'colombo',
    name: 'Colombo',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Colombo é uma das maiores cidades da região metropolitana, com crescimento acelerado e diversas opções de bairros. Oferece ótimo custo-benefício para quem busca moradia próxima à capital.',
    services: ['Casas populares', 'Projetos familiares', 'Construção econômica', 'Parcelamento facilitado'],
    seoTitle: 'Casas Pré-Fabricadas em Colombo PR - Preço Justo',
    seoDescription: 'Encontre sua casa ideal em Colombo. Casas pré-fabricadas econômicas com qualidade garantida. Vários modelos disponíveis.',
    seoKeywords: ['casas colombo', 'casa pré-fabricada colombo', 'moradia colombo', 'casa barata colombo']
  },
  {
    slug: 'fazenda-rio-grande',
    name: 'Fazenda Rio Grande',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Fazenda Rio Grande é uma das cidades que mais cresce na região metropolitana. Com excelente localização e infraestrutura em expansão, é perfeita para famílias que buscam tranquilidade.',
    services: ['Casas térreas', 'Projetos modernos', 'Construção ágil', 'Assistência completa'],
    seoTitle: 'Casas Pré-Fabricadas em Fazenda Rio Grande - Qualidade',
    seoDescription: 'Sua nova casa em Fazenda Rio Grande está aqui. Casas pré-fabricadas modernas e acessíveis. Consulte nossos modelos.',
    seoKeywords: ['casas fazenda rio grande', 'casa pré-fabricada', 'moradia frg', 'casa térrea']
  },
  {
    slug: 'pinhais',
    name: 'Pinhais',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Pinhais é conhecida como a cidade mais verde do Paraná, com excelente qualidade de vida. Próxima a Curitiba, oferece tranquilidade e infraestrutura completa para sua família.',
    services: ['Casas ecológicas', 'Projetos sustentáveis', 'Construção verde', 'Tecnologia avançada'],
    seoTitle: 'Casas Pré-Fabricadas em Pinhais PR - Sustentáveis',
    seoDescription: 'Casas pré-fabricadas sustentáveis em Pinhais. Qualidade, conforto e respeito ao meio ambiente. Conheça nossos modelos.',
    seoKeywords: ['casas pinhais', 'casa ecológica', 'construção sustentável', 'casa verde pinhais']
  },
  {
    slug: 'piraquara',
    name: 'Piraquara',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Piraquara é reconhecida por suas belezas naturais e mananciais de água. Cidade tranquila e segura, ideal para quem busca contato com a natureza sem abrir mão da proximidade urbana.',
    services: ['Casas campestres', 'Projetos rurais', 'Construção natural', 'Integração com natureza'],
    seoTitle: 'Casas Pré-Fabricadas em Piraquara PR - Natureza',
    seoDescription: 'Viva cercado pela natureza em Piraquara. Casas pré-fabricadas perfeitas para ambiente rural. Qualidade e conforto garantidos.',
    seoKeywords: ['casas piraquara', 'casa campo', 'casa rural piraquara', 'moradia natural']
  },
  {
    slug: 'são-josé-dos-pinhais',
    name: 'São José dos Pinhais',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'São José dos Pinhais é uma cidade estratégica, abrigando o aeroporto internacional e diversos polos empresariais. Oferece excelente infraestrutura e opções variadas de moradia.',
    services: ['Casas empresariais', 'Projetos executivos', 'Construção premium', 'Acabamento superior'],
    seoTitle: 'Casas Pré-Fabricadas em São José dos Pinhais - Premium',
    seoDescription: 'Casas pré-fabricadas de alto padrão em São José dos Pinhais. Localização estratégica e qualidade excepcional.',
    seoKeywords: ['casas sjp', 'casa pré-fabricada sjp', 'moradia são josé', 'casa premium sjp']
  },
  {
    slug: 'campo-largo',
    name: 'Campo Largo',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Campo Largo é conhecida pela louça e cerâmica, com forte tradição cultural. A cidade oferece tranquilidade e custos acessíveis, sendo ideal para famílias.',
    services: ['Casas tradicionais', 'Projetos clássicos', 'Construção sólida', 'Valores acessíveis'],
    seoTitle: 'Casas Pré-Fabricadas em Campo Largo - Tradição',
    seoDescription: 'Construa sua casa em Campo Largo com a Casas Pinheirão. Modelos tradicionais e preços que cabem no seu bolso.',
    seoKeywords: ['casas campo largo', 'casa tradicional', 'moradia campo largo', 'casa barata']
  },
  {
    slug: 'campo-magro',
    name: 'Campo Magro',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Campo Magro é uma cidade pequena e acolhedora, perfeita para quem busca tranquilidade e contato com a natureza. Próxima a Curitiba, oferece qualidade de vida diferenciada.',
    services: ['Casas compactas', 'Projetos intimistas', 'Construção familiar', 'Atendimento próximo'],
    seoTitle: 'Casas Pré-Fabricadas em Campo Magro - Aconchego',
    seoDescription: 'Sua casa dos sonhos em Campo Magro. Projetos aconchegantes e personalizados para sua família.',
    seoKeywords: ['casas campo magro', 'casa pequena', 'moradia tranquila', 'casa familiar']
  },
  {
    slug: 'campina-grande-do-sul',
    name: 'Campina Grande do Sul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Campina Grande do Sul oferece ar puro e clima serrano. Cidade tranquila e segura, ideal para quem valoriza qualidade de vida e natureza.',
    services: ['Casas serranas', 'Projetos para clima frio', 'Construção térmica', 'Conforto climático'],
    seoTitle: 'Casas Pré-Fabricadas em Campina Grande do Sul - Serra',
    seoDescription: 'Casas pré-fabricadas preparadas para o clima serrano. Conforto térmico e qualidade em Campina Grande do Sul.',
    seoKeywords: ['casas campina grande sul', 'casa serra', 'moradia clima frio', 'casa térmica']
  },
  {
    slug: 'quatro-barras',
    name: 'Quatro Barras',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Quatro Barras é uma cidade charmosa e acolhedora, conhecida por seus sítios e chácaras. Perfeita para quem busca paz e proximidade com a natureza.',
    services: ['Casas para chácaras', 'Projetos rurais', 'Construção versátil', 'Modelos flexíveis'],
    seoTitle: 'Casas Pré-Fabricadas em Quatro Barras - Chácaras',
    seoDescription: 'Casas ideais para chácaras em Quatro Barras. Projetos versáteis que se adaptam ao seu terreno.',
    seoKeywords: ['casas quatro barras', 'casa chácara', 'moradia rural', 'casa sítio']
  },
  {
    slug: 'balsa-nova',
    name: 'Balsa Nova',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Balsa Nova é conhecida por suas paisagens deslumbrantes e turismo rural. Cidade pacata e acolhedora, ideal para quem busca contato com a natureza.',
    services: ['Casas rurais', 'Projetos turísticos', 'Construção campestre', 'Design natural'],
    seoTitle: 'Casas Pré-Fabricadas em Balsa Nova - Rural',
    seoDescription: 'Construa sua casa no campo em Balsa Nova. Projetos especiais para turismo rural e moradia campestre.',
    seoKeywords: ['casas balsa nova', 'casa rural', 'turismo rural', 'casa campo']
  },
  {
    slug: 'mandirituba',
    name: 'Mandirituba',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Mandirituba é uma cidade em desenvolvimento com potencial de crescimento. Oferece tranquilidade e custos acessíveis para moradia.',
    services: ['Casas em desenvolvimento', 'Projetos de expansão', 'Construção crescente', 'Investimento futuro'],
    seoTitle: 'Casas Pré-Fabricadas em Mandirituba - Investimento',
    seoDescription: 'Invista em sua casa em Mandirituba. Cidade em crescimento com ótimas oportunidades.',
    seoKeywords: ['casas mandirituba', 'investimento imobiliário', 'casa nova', 'oportunidade']
  },
  {
    slug: 'contenda',
    name: 'Contenda',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Contenda é uma cidade pequena e tranquila, perfeita para quem busca sossego e vida no interior. Oferece ótimo custo-benefício.',
    services: ['Casas interioranas', 'Projetos simples', 'Construção econômica', 'Vida tranquila'],
    seoTitle: 'Casas Pré-Fabricadas em Contenda - Interior',
    seoDescription: 'Sua casa no interior do Paraná. Modelos econômicos e confortáveis em Contenda.',
    seoKeywords: ['casas contenda', 'casa interior', 'moradia tranquila', 'casa simples']
  },
  {
    slug: 'bocaiúva-do-sul',
    name: 'Bocaiúva do Sul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Bocaiúva do Sul é uma pequena cidade com grande potencial. Ambiente tranquilo e familiar, ideal para quem busca paz.',
    services: ['Casas familiares', 'Projetos acolhedores', 'Construção comunitária', 'Ambiente familiar'],
    seoTitle: 'Casas Pré-Fabricadas em Bocaiúva do Sul - Família',
    seoDescription: 'Casas perfeitas para famílias em Bocaiúva do Sul. Ambiente acolhedor e seguro.',
    seoKeywords: ['casas bocaiúva sul', 'casa família', 'moradia segura', 'casa acolhedora']
  },
  {
    slug: 'itaperuçu',
    name: 'Itaperuçu',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Itaperuçu é conhecida por suas pedreiras e belezas naturais. Cidade tranquila com clima serrano e ar puro.',
    services: ['Casas serranas', 'Projetos montanhosos', 'Construção rochosa', 'Design natural'],
    seoTitle: 'Casas Pré-Fabricadas em Itaperuçu - Serra',
    seoDescription: 'Viva na serra em Itaperuçu. Casas preparadas para clima serrano com vista privilegiada.',
    seoKeywords: ['casas itaperuçu', 'casa serra', 'moradia montanha', 'clima serrano']
  },
  {
    slug: 'lapa',
    name: 'Lapa',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'A Lapa é uma cidade histórica com arquitetura colonial preservada. Rica em cultura e tradição, oferece qualidade de vida diferenciada.',
    services: ['Casas históricas', 'Projetos coloniais', 'Construção tradicional', 'Estilo clássico'],
    seoTitle: 'Casas Pré-Fabricadas na Lapa PR - Histórica',
    seoDescription: 'Casas que respeitam a tradição da Lapa. Projetos que combinam modernidade com história.',
    seoKeywords: ['casas lapa', 'casa histórica', 'arquitetura colonial', 'casa tradicional']
  },
  {
    slug: 'rio-branco-do-sul',
    name: 'Rio Branco do Sul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Rio Branco do Sul tem tradição na mineração e oferece ambiente tranquilo. Cidade pequena e acolhedora, ideal para famílias.',
    services: ['Casas mineradoras', 'Projetos trabalhadores', 'Construção sólida', 'Moradia operária'],
    seoTitle: 'Casas Pré-Fabricadas em Rio Branco do Sul - Trabalho',
    seoDescription: 'Casas para trabalhadores em Rio Branco do Sul. Solidez e conforto para sua família.',
    seoKeywords: ['casas rio branco sul', 'casa trabalhador', 'moradia operária', 'casa sólida']
  },
  {
    slug: 'cerro-azul',
    name: 'Cerro Azul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Cerro Azul é uma cidade ribeirinha com belezas naturais exuberantes. Perfeita para quem busca tranquilidade e contato com a natureza.',
    services: ['Casas ribeirinhas', 'Projetos naturais', 'Construção ecológica', 'Design sustentável'],
    seoTitle: 'Casas Pré-Fabricadas em Cerro Azul - Natureza',
    seoDescription: 'Viva em harmonia com a natureza em Cerro Azul. Casas ecológicas e sustentáveis.',
    seoKeywords: ['casas cerro azul', 'casa ribeirinha', 'moradia natural', 'casa ecológica']
  },
  {
    slug: 'campo-do-tenente',
    name: 'Campo do Tenente',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Campo do Tenente é uma cidade serrana com clima frio e paisagens deslumbrantes. Ideal para quem aprecia o frio e a tranquilidade.',
    services: ['Casas de inverno', 'Projetos térmicos', 'Construção aquecida', 'Conforto no frio'],
    seoTitle: 'Casas Pré-Fabricadas em Campo do Tenente - Inverno',
    seoDescription: 'Casas preparadas para o inverno em Campo do Tenente. Conforto térmico garantido.',
    seoKeywords: ['casas campo tenente', 'casa inverno', 'moradia frio', 'casa aquecida']
  },
  {
    slug: 'rio-negro',
    name: 'Rio Negro',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Rio Negro está no limite com Santa Catarina e oferece tranquilidade interiorana. Cidade acolhedora com ótima qualidade de vida.',
    services: ['Casas fronteiriças', 'Projetos regionais', 'Construção interestadual', 'Design versátil'],
    seoTitle: 'Casas Pré-Fabricadas em Rio Negro PR - Fronteira',
    seoDescription: 'Sua casa na fronteira do Paraná. Projetos que atendem toda a região de Rio Negro.',
    seoKeywords: ['casas rio negro', 'casa fronteira', 'moradia regional', 'casa paraná']
  },
  {
    slug: 'tijucas-do-sul',
    name: 'Tijucas do Sul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Tijucas do Sul é conhecida pela produção de mel e pela natureza preservada. Cidade tranquila e acolhedora.',
    services: ['Casas apícolas', 'Projetos rurais', 'Construção campestre', 'Design natural'],
    seoTitle: 'Casas Pré-Fabricadas em Tijucas do Sul - Campo',
    seoDescription: 'Casas perfeitas para o campo em Tijucas do Sul. Aproveite a natureza com conforto.',
    seoKeywords: ['casas tijucas sul', 'casa rural', 'moradia campo', 'casa mel']
  },
  {
    slug: 'tunas-do-paraná',
    name: 'Tunas do Paraná',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Tunas do Paraná é uma pequena cidade com grande riqueza natural. Ideal para quem busca paz e contato com a natureza.',
    services: ['Casas naturais', 'Projetos ecológicos', 'Construção verde', 'Harmonia ambiental'],
    seoTitle: 'Casas Pré-Fabricadas em Tunas do Paraná - Paz',
    seoDescription: 'Encontre a paz em Tunas do Paraná. Casas integradas à natureza.',
    seoKeywords: ['casas tunas paraná', 'casa paz', 'moradia natural', 'casa verde']
  },
  {
    slug: 'agudos-do-sul',
    name: 'Agudos do Sul',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Agudos do Sul é uma cidade pequena e tranquila, perfeita para quem busca sossego. Ambiente familiar e acolhedor.',
    services: ['Casas tranquilas', 'Projetos pacatos', 'Construção serena', 'Vida calma'],
    seoTitle: 'Casas Pré-Fabricadas em Agudos do Sul - Tranquilidade',
    seoDescription: 'Viva com tranquilidade em Agudos do Sul. Casas perfeitas para quem busca paz.',
    seoKeywords: ['casas agudos sul', 'casa tranquila', 'moradia pacata', 'casa sossego']
  },
  {
    slug: 'doutor-ulysses',
    name: 'Doutor Ulysses',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Doutor Ulysses é uma cidade pequena com clima serrano. Tranquilidade e ar puro caracterizam a região.',
    services: ['Casas serranas', 'Projetos simples', 'Construção tradicional', 'Conforto básico'],
    seoTitle: 'Casas Pré-Fabricadas em Doutor Ulysses - Serra',
    seoDescription: 'Casas simples e confortáveis em Doutor Ulysses. Viva na serra com qualidade.',
    seoKeywords: ['casas doutor ulysses', 'casa serra', 'moradia simples', 'casa tranquila']
  },
  {
    slug: 'piên',
    name: 'Piên',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Piên é uma cidade com forte tradição alemã e polonesa. Oferece tranquilidade e qualidade de vida com influências culturais europeias.',
    services: ['Casas europeias', 'Projetos tradicionais', 'Construção cultural', 'Estilo europeu'],
    seoTitle: 'Casas Pré-Fabricadas em Piên - Tradição Europeia',
    seoDescription: 'Casas com influência europeia em Piên. Tradição e modernidade em harmonia.',
    seoKeywords: ['casas piên', 'casa europeia', 'moradia tradicional', 'casa alemã']
  },
  {
    slug: 'quitandinha',
    name: 'Quitandinha',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Quitandinha é uma cidade serrana com clima frio e paisagens encantadoras. Perfeita para quem aprecia o clima de montanha.',
    services: ['Casas montanhosas', 'Projetos frios', 'Construção térmica', 'Design alpino'],
    seoTitle: 'Casas Pré-Fabricadas em Quitandinha - Montanha',
    seoDescription: 'Casas para clima de montanha em Quitandinha. Conforto e aquecimento garantidos.',
    seoKeywords: ['casas quitandinha', 'casa montanha', 'moradia frio', 'casa alpina']
  },
  {
    slug: 'adrianópolis',
    name: 'Adrianópolis',
    type: 'city',
    region: 'Região Metropolitana de Curitiba',
    description: 'Adrianópolis é uma cidade com grande potencial turístico e belezas naturais. Oferece tranquilidade e contato direto com a natureza.',
    services: ['Casas turísticas', 'Projetos naturais', 'Construção ecológica', 'Design sustentável'],
    seoTitle: 'Casas Pré-Fabricadas em Adrianópolis - Turismo',
    seoDescription: 'Casas ideais para turismo em Adrianópolis. Aproveite as belezas naturais com conforto.',
    seoKeywords: ['casas adrianópolis', 'casa turismo', 'moradia natural', 'casa ecológica']
  }
];

// ============================================
// BAIRROS DE CURITIBA
// ============================================
export const neighborhoods: Location[] = [
  {
    slug: 'batel',
    name: 'Batel',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Batel é um dos bairros mais nobres de Curitiba, conhecido por suas ruas arborizadas, restaurantes sofisticados e comércio de alto padrão. É ideal para quem busca localização privilegiada e qualidade de vida urbana.',
    services: ['Casas de alto padrão', 'Projetos sofisticados', 'Construção premium', 'Design contemporâneo'],
    seoTitle: 'Casas Pré-Fabricadas no Batel Curitiba - Alto Padrão',
    seoDescription: 'Casas pré-fabricadas de luxo no Batel. Qualidade premium em um dos melhores bairros de Curitiba.',
    seoKeywords: ['casas batel', 'casa alto padrão batel', 'moradia luxo curitiba', 'casa nobre batel']
  },
  {
    slug: 'água-verde',
    name: 'Água Verde',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Água Verde é um bairro tradicional e bem localizado em Curitiba. Com ótima infraestrutura, comércio diversificado e fácil acesso a todas as regiões da cidade.',
    services: ['Casas tradicionais', 'Projetos clássicos', 'Construção central', 'Localização estratégica'],
    seoTitle: 'Casas Pré-Fabricadas no Água Verde - Localização Central',
    seoDescription: 'Sua casa no coração de Curitiba. Água Verde oferece localização privilegiada e toda infraestrutura.',
    seoKeywords: ['casas água verde', 'casa central curitiba', 'moradia água verde', 'casa tradicional']
  },
  {
    slug: 'boqueirão',
    name: 'Boqueirão',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Boqueirão é um dos maiores e mais populosos bairros de Curitiba. Oferece infraestrutura completa com shopping centers, hospitais, escolas e excelente transporte público.',
    services: ['Casas populares', 'Projetos amplos', 'Construção versátil', 'Modelos familiares'],
    seoTitle: 'Casas Pré-Fabricadas no Boqueirão Curitiba - Completo',
    seoDescription: 'Casas no Boqueirão com toda infraestrutura ao redor. Opções para toda família.',
    seoKeywords: ['casas boqueirão', 'casa família boqueirão', 'moradia completa', 'casa popular']
  },
  {
    slug: 'cic',
    name: 'Cidade Industrial (CIC)',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'A Cidade Industrial de Curitiba (CIC) é uma das maiores áreas industriais da América Latina. Bairro em crescimento com muitas oportunidades de moradia e trabalho.',
    services: ['Casas operárias', 'Projetos industriais', 'Construção rápida', 'Moradia trabalhadores'],
    seoTitle: 'Casas Pré-Fabricadas no CIC Curitiba - Oportunidade',
    seoDescription: 'Casas próximas às indústrias no CIC. Ideal para trabalhadores que buscam praticidade.',
    seoKeywords: ['casas cic', 'casa cidade industrial', 'moradia cic', 'casa operária']
  },
  {
    slug: 'santa-felicidade',
    name: 'Santa Felicidade',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'Santa Felicidade é famoso por sua gastronomia italiana e vinícolas. Bairro charmoso e arborizado, oferece qualidade de vida e tranquilidade.',
    services: ['Casas italianas', 'Projetos coloniais', 'Construção tradicional', 'Estilo europeu'],
    seoTitle: 'Casas Pré-Fabricadas em Santa Felicidade - Charme',
    seoDescription: 'Viva o charme de Santa Felicidade. Casas que combinam tradição italiana com conforto moderno.',
    seoKeywords: ['casas santa felicidade', 'casa italiana', 'moradia tradicional', 'casa colonial']
  },
  {
    slug: 'ahú',
    name: 'Ahú',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Ahú é um bairro central e bem localizado, próximo ao centro e com fácil acesso. Oferece infraestrutura completa e opções de comércio variadas.',
    services: ['Casas centrais', 'Projetos urbanos', 'Construção prática', 'Acesso facilitado'],
    seoTitle: 'Casas Pré-Fabricadas no Ahú Curitiba - Centralidade',
    seoDescription: 'Casas no Ahú com localização privilegiada. Próximo a tudo que você precisa.',
    seoKeywords: ['casas ahú', 'casa central', 'moradia urbana', 'casa prática']
  },
  {
    slug: 'bacacheri',
    name: 'Bacacheri',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Bacacheri é um bairro residencial tranquilo e bem estruturado. Com ótima localização e infraestrutura completa, é ideal para famílias.',
    services: ['Casas residenciais', 'Projetos familiares', 'Construção tranquila', 'Ambiente familiar'],
    seoTitle: 'Casas Pré-Fabricadas no Bacacheri - Família',
    seoDescription: 'Bairro perfeito para famílias. Casas no Bacacheri com tranquilidade e segurança.',
    seoKeywords: ['casas bacacheri', 'casa família', 'moradia tranquila', 'casa residencial']
  },
  {
    slug: 'cajuru',
    name: 'Cajuru',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Cajuru é um bairro popular e bem servido de comércio. Oferece ótimo custo-benefício e fácil acesso ao transporte público.',
    services: ['Casas econômicas', 'Projetos acessíveis', 'Construção popular', 'Valores justos'],
    seoTitle: 'Casas Pré-Fabricadas no Cajuru - Acessível',
    seoDescription: 'Casas com preço justo no Cajuru. Qualidade e economia para sua família.',
    seoKeywords: ['casas cajuru', 'casa econômica', 'moradia acessível', 'casa barata']
  },
  {
    slug: 'capão-raso',
    name: 'Capão Raso',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Capão Raso é um bairro residencial com boa infraestrutura. Oferece tranquilidade e proximidade com centros comerciais.',
    services: ['Casas confortáveis', 'Projetos modernos', 'Construção qualidade', 'Moradia digna'],
    seoTitle: 'Casas Pré-Fabricadas no Capão Raso - Conforto',
    seoDescription: 'Conforto e qualidade no Capão Raso. Casas modernas para sua família.',
    seoKeywords: ['casas capão raso', 'casa moderna', 'moradia confortável', 'casa qualidade']
  },
  {
    slug: 'portão',
    name: 'Portão',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Portão é um bairro dinâmico com comércio forte e boa infraestrutura. Oferece variedade de serviços e opções de lazer.',
    services: ['Casas dinâmicas', 'Projetos versáteis', 'Construção comercial', 'Localização ativa'],
    seoTitle: 'Casas Pré-Fabricadas no Portão Curitiba - Dinamismo',
    seoDescription: 'Viva no centro comercial do Portão. Casas próximas a tudo que você precisa.',
    seoKeywords: ['casas portão', 'casa comercial', 'moradia ativa', 'casa dinâmica']
  },
  {
    slug: 'pinheirinho',
    name: 'Pinheirinho',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Pinheirinho é um dos maiores bairros de Curitiba, com grande crescimento populacional. Oferece infraestrutura em expansão e ótimas oportunidades.',
    services: ['Casas expansão', 'Projetos crescimento', 'Construção desenvolvimento', 'Futuro promissor'],
    seoTitle: 'Casas Pré-Fabricadas no Pinheirinho - Crescimento',
    seoDescription: 'Invista no futuro do Pinheirinho. Bairro em crescimento com grandes oportunidades.',
    seoKeywords: ['casas pinheirinho', 'casa crescimento', 'moradia expansão', 'investimento']
  },
  {
    slug: 'sítio-cercado',
    name: 'Sítio Cercado',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Sítio Cercado é um bairro popular com grande população. Oferece comércio variado e transporte público eficiente.',
    services: ['Casas populares', 'Projetos comunitários', 'Construção social', 'Moradia popular'],
    seoTitle: 'Casas Pré-Fabricadas no Sítio Cercado - Popular',
    seoDescription: 'Casas acessíveis no Sítio Cercado. Moradia digna para todos.',
    seoKeywords: ['casas sítio cercado', 'casa popular', 'moradia social', 'casa acessível']
  },
  {
    slug: 'xaxim',
    name: 'Xaxim',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Xaxim é um bairro residencial com boa infraestrutura. Oferece tranquilidade e proximidade com áreas verdes.',
    services: ['Casas verdes', 'Projetos naturais', 'Construção arborizada', 'Ambiente natural'],
    seoTitle: 'Casas Pré-Fabricadas no Xaxim - Natureza',
    seoDescription: 'Viva próximo à natureza no Xaxim. Casas em bairro arborizado.',
    seoKeywords: ['casas xaxim', 'casa verde', 'moradia natural', 'casa arborizada']
  },
  {
    slug: 'alto-boqueirão',
    name: 'Alto Boqueirão',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Alto Boqueirão é um bairro residencial com boa infraestrutura. Extensão do Boqueirão, oferece tranquilidade e estrutura completa.',
    services: ['Casas residenciais', 'Projetos tranquilos', 'Construção familiar', 'Ambiente calmo'],
    seoTitle: 'Casas Pré-Fabricadas no Alto Boqueirão - Residencial',
    seoDescription: 'Tranquilidade no Alto Boqueirão. Casas perfeitas para famílias.',
    seoKeywords: ['casas alto boqueirão', 'casa tranquila', 'moradia família', 'casa calma']
  },
  {
    slug: 'uberaba',
    name: 'Uberaba',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Uberaba é um bairro tradicional com comércio forte. Oferece infraestrutura completa e fácil acesso ao centro.',
    services: ['Casas tradicionais', 'Projetos comerciais', 'Construção urbana', 'Acesso fácil'],
    seoTitle: 'Casas Pré-Fabricadas no Uberaba Curitiba - Tradição',
    seoDescription: 'Tradição e comércio no Uberaba. Casas bem localizadas e estruturadas.',
    seoKeywords: ['casas uberaba', 'casa tradicional', 'moradia comercial', 'casa urbana']
  },
  {
    slug: 'santa-cândida',
    name: 'Santa Cândida',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'A Santa Cândida é um bairro popular e bem servido. Oferece comércio variado e ótimo transporte público.',
    services: ['Casas populares', 'Projetos práticos', 'Construção acessível', 'Transporte fácil'],
    seoTitle: 'Casas Pré-Fabricadas em Santa Cândida - Praticidade',
    seoDescription: 'Praticidade em Santa Cândida. Casas com fácil acesso e boa localização.',
    seoKeywords: ['casas santa cândida', 'casa prática', 'moradia popular', 'casa acessível']
  },
  {
    slug: 'tatuquara',
    name: 'Tatuquara',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Tatuquara é um bairro em desenvolvimento na região sul. Oferece oportunidades de moradia com custos acessíveis.',
    services: ['Casas desenvolvimento', 'Projetos novos', 'Construção emergente', 'Oportunidades'],
    seoTitle: 'Casas Pré-Fabricadas no Tatuquara - Oportunidade',
    seoDescription: 'Novas oportunidades no Tatuquara. Invista em seu futuro.',
    seoKeywords: ['casas tatuquara', 'casa nova', 'moradia oportunidade', 'investimento']
  },
  {
    slug: 'boa-vista',
    name: 'Boa Vista',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'A Boa Vista é um bairro central e histórico. Oferece charme arquitetônico e proximidade com o centro da cidade.',
    services: ['Casas históricas', 'Projetos centrais', 'Construção charmosa', 'Arquitetura clássica'],
    seoTitle: 'Casas Pré-Fabricadas na Boa Vista - Charme',
    seoDescription: 'Charme e história na Boa Vista. Casas em bairro tradicional de Curitiba.',
    seoKeywords: ['casas boa vista', 'casa histórica', 'moradia charme', 'casa central']
  },
  {
    slug: 'centro',
    name: 'Centro',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Centro é o coração de Curitiba, com toda infraestrutura comercial e cultural. Ideal para quem busca vida urbana intensa.',
    services: ['Casas urbanas', 'Projetos centrais', 'Construção metropolitana', 'Vida agitada'],
    seoTitle: 'Casas Pré-Fabricadas no Centro de Curitiba - Urbano',
    seoDescription: 'Viva no centro de tudo. Casas no coração de Curitiba.',
    seoKeywords: ['casas centro curitiba', 'casa urbana', 'moradia central', 'casa metropolitana']
  },
  {
    slug: 'cristo-rei',
    name: 'Cristo Rei',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Cristo Rei é um bairro residencial e industrial. Oferece boa infraestrutura e proximidade com áreas de trabalho.',
    services: ['Casas mistas', 'Projetos residenciais', 'Construção prática', 'Trabalho próximo'],
    seoTitle: 'Casas Pré-Fabricadas no Cristo Rei - Praticidade',
    seoDescription: 'More perto do trabalho no Cristo Rei. Praticidade e conforto.',
    seoKeywords: ['casas cristo rei', 'casa prática', 'moradia trabalho', 'casa mista']
  },
  {
    slug: 'bigorrilho',
    name: 'Bigorrilho',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Bigorrilho é um bairro nobre e bem localizado. Oferece sofisticação e proximidade com o centro.',
    services: ['Casas nobres', 'Projetos sofisticados', 'Construção premium', 'Alto padrão'],
    seoTitle: 'Casas Pré-Fabricadas no Bigorrilho - Sofisticação',
    seoDescription: 'Sofisticação no Bigorrilho. Casas de alto padrão bem localizadas.',
    seoKeywords: ['casas bigorrilho', 'casa nobre', 'moradia sofisticada', 'casa premium']
  },
  {
    slug: 'cabral',
    name: 'Cabral',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Cabral é um bairro histórico e tradicional. Oferece charme arquitetônico e tranquilidade próxima ao centro.',
    services: ['Casas históricas', 'Projetos tradicionais', 'Construção clássica', 'Charme antigo'],
    seoTitle: 'Casas Pré-Fabricadas no Cabral - História',
    seoDescription: 'História e charme no Cabral. Viva em um dos bairros mais tradicionais de Curitiba.',
    seoKeywords: ['casas cabral', 'casa histórica', 'moradia tradicional', 'casa charme']
  },
  {
    slug: 'juvevê',
    name: 'Juvevê',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Juvevê é um bairro central e bem localizado. Oferece infraestrutura completa e fácil acesso a todas as regiões.',
    services: ['Casas centrais', 'Projetos urbanos', 'Construção estratégica', 'Localização perfeita'],
    seoTitle: 'Casas Pré-Fabricadas no Juvevê - Localização',
    seoDescription: 'Localização perfeita no Juvevê. Casas com acesso facilitado a tudo.',
    seoKeywords: ['casas juvevê', 'casa central', 'moradia urbana', 'casa estratégica']
  },
  {
    slug: 'mercês',
    name: 'Mercês',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Mercês é um bairro residencial e tranquilo. Oferece boa infraestrutura e ambiente familiar.',
    services: ['Casas residenciais', 'Projetos familiares', 'Construção tranquila', 'Ambiente calmo'],
    seoTitle: 'Casas Pré-Fabricadas no Mercês - Tranquilidade',
    seoDescription: 'Tranquilidade no Mercês. Casas perfeitas para famílias que buscam paz.',
    seoKeywords: ['casas mercês', 'casa tranquila', 'moradia família', 'casa calma']
  },
  {
    slug: 'alto-da-glória',
    name: 'Alto da Glória',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Alto da Glória é um bairro histórico com vista privilegiada. Oferece charme e proximidade com o centro.',
    services: ['Casas com vista', 'Projetos panorâmicos', 'Construção elevada', 'Vista cidade'],
    seoTitle: 'Casas Pré-Fabricadas no Alto da Glória - Vista',
    seoDescription: 'Vista privilegiada no Alto da Glória. Casas com charme e localização única.',
    seoKeywords: ['casas alto glória', 'casa vista', 'moradia panorâmica', 'casa elevada']
  },
  {
    slug: 'jardim-botânico',
    name: 'Jardim Botânico',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Jardim Botânico é um bairro charmoso próximo ao famoso cartão postal. Oferece tranquilidade e áreas verdes.',
    services: ['Casas verdes', 'Projetos naturais', 'Construção ecológica', 'Ambiente botânico'],
    seoTitle: 'Casas Pré-Fabricadas no Jardim Botânico - Verde',
    seoDescription: 'Viva cercado de verde no Jardim Botânico. Natureza e conforto em harmonia.',
    seoKeywords: ['casas jardim botânico', 'casa verde', 'moradia natural', 'casa ecológica']
  },
  {
    slug: 'hugo-lange',
    name: 'Hugo Lange',
    type: 'neighborhood',
    region: 'Curitiba',
    description: 'O Hugo Lange é um bairro nobre e arborizado. Oferece tranquilidade e sofisticação próximo ao Parque Barigui.',
    services: ['Casas nobres', 'Projetos arborizados', 'Construção sofisticada', 'Ambiente natural'],
    seoTitle: 'Casas Pré-Fabricadas no Hugo Lange - Nobreza',
    seoDescription: 'Nobreza e natureza no Hugo Lange. Casas sofisticadas em bairro arborizado.',
    seoKeywords: ['casas hugo lange', 'casa nobre', 'moradia sofisticada', 'casa arborizada']
  }
];

// Combinar todas as localizações
export const allLocations = [...cities, ...neighborhoods];

// Função para buscar localização por slug
export const getLocationBySlug = (slug: string): Location | undefined => {
  return allLocations.find(loc => loc.slug === slug);
};

// Função para obter todas as cidades
export const getAllCities = (): Location[] => {
  return cities;
};

// Função para obter todos os bairros
export const getAllNeighborhoods = (): Location[] => {
  return neighborhoods;
};
