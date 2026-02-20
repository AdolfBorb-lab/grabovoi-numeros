export interface GrabovoiNumber {
  id: string;
  sequence: string;
  description: string;
  category: string;
  keywords: string[];
}

export type Category = 
  | 'abundance'
  | 'love'
  | 'home'
  | 'work'
  | 'spirituality'
  | 'health'
  | 'goals'
  | 'studies';

export interface CategoryInfo {
  id: Category;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'abundance',
    name: 'Abundancia y Dinero',
    emoji: '💰',
    color: 'from-amber-400 to-yellow-600',
    gradient: 'bg-gradient-to-r from-amber-400 to-yellow-600'
  },
  {
    id: 'love',
    name: 'Amor y Relaciones',
    emoji: '❤️',
    color: 'from-rose-400 to-pink-600',
    gradient: 'bg-gradient-to-r from-rose-400 to-pink-600'
  },
  {
    id: 'home',
    name: 'Casa y Propiedades',
    emoji: '🏠',
    color: 'from-emerald-400 to-teal-600',
    gradient: 'bg-gradient-to-r from-emerald-400 to-teal-600'
  },
  {
    id: 'work',
    name: 'Trabajo y Negocios',
    emoji: '💼',
    color: 'from-blue-400 to-indigo-600',
    gradient: 'bg-gradient-to-r from-blue-400 to-indigo-600'
  },
  {
    id: 'spirituality',
    name: 'Espiritualidad',
    emoji: '🧘',
    color: 'from-violet-400 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-400 to-purple-600'
  },
  {
    id: 'health',
    name: 'Salud y Bienestar',
    emoji: '🩺',
    color: 'from-green-400 to-emerald-600',
    gradient: 'bg-gradient-to-r from-green-400 to-emerald-600'
  },
  {
    id: 'goals',
    name: 'Metas y Deseos',
    emoji: '🎯',
    color: 'from-orange-400 to-red-500',
    gradient: 'bg-gradient-to-r from-orange-400 to-red-500'
  },
  {
    id: 'studies',
    name: 'Estudios y Conocimiento',
    emoji: '📚',
    color: 'from-cyan-400 to-blue-500',
    gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500'
  }
];

export const grabovoiNumbers: GrabovoiNumber[] = [
  // ABUNDANCIA Y DINERO
  {
    id: 'ab-1',
    sequence: '520',
    description: 'Dinero inesperado',
    category: 'abundance',
    keywords: ['dinero', 'inesperado', 'sorpresa']
  },
  {
    id: 'ab-2',
    sequence: '318_798',
    description: 'Abundancia financiera / Liberar deudas',
    category: 'abundance',
    keywords: ['abundancia', 'deudas', 'finanzas', 'liberación']
  },
  {
    id: 'ab-3',
    sequence: '71427321893',
    description: 'Abundancia y Prosperidad (Código Millonario)',
    category: 'abundance',
    keywords: ['millonario', 'prosperidad', 'riqueza', 'abundancia']
  },
  {
    id: 'ab-4',
    sequence: '519_7148',
    description: 'Todo es Posible',
    category: 'abundance',
    keywords: ['posibilidades', 'infinito', 'creencia']
  },
  {
    id: 'ab-5',
    sequence: '419_488_71',
    description: 'Atraer circunstancias favorables',
    category: 'abundance',
    keywords: ['circunstancias', 'favorable', 'atracción']
  },
  {
    id: 'ab-6',
    sequence: '719_481_71',
    description: 'Materializar tus planes y pensamientos',
    category: 'abundance',
    keywords: ['materializar', 'planes', 'manifestación']
  },
  {
    id: 'ab-7',
    sequence: '599_061_898719',
    description: 'Flujo de dinero',
    category: 'abundance',
    keywords: ['flujo', 'dinero', 'continuo']
  },
  {
    id: 'ab-8',
    sequence: '518_491_617',
    description: 'Independencia financiera',
    category: 'abundance',
    keywords: ['independencia', 'libertad', 'financiera']
  },
  {
    id: 'ab-9',
    sequence: '64889498871',
    description: 'Rehabilitación Financiera',
    category: 'abundance',
    keywords: ['rehabilitación', 'recuperación', 'finanzas']
  },
  {
    id: 'ab-10',
    sequence: '4987123184991',
    description: 'Rentabilidad, rendimiento, eficiencia económica',
    category: 'abundance',
    keywords: ['rentabilidad', 'rendimiento', 'eficiencia']
  },

  // AMOR Y RELACIONES
  {
    id: 'lo-1',
    sequence: '888_412_1289018',
    description: 'Amor',
    category: 'love',
    keywords: ['amor', 'sentimientos', 'conexión']
  },
  {
    id: 'lo-2',
    sequence: '515889',
    description: 'Enamorarse',
    category: 'love',
    keywords: ['enamorarse', 'romance', 'pareja']
  },
  {
    id: 'lo-3',
    sequence: '591_718_9181419',
    description: 'Encontrar la pareja / Atraer persona en resonancia',
    category: 'love',
    keywords: ['pareja', 'alma gemela', 'resonancia', 'atracción']
  },
  {
    id: 'lo-4',
    sequence: '814_418_719',
    description: 'Armonizar a toda la familia',
    category: 'love',
    keywords: ['familia', 'armonía', 'paz']
  },
  {
    id: 'lo-5',
    sequence: '285555901',
    description: 'Armonía en Familia',
    category: 'love',
    keywords: ['familia', 'armonía', 'unidad']
  },
  {
    id: 'lo-6',
    sequence: '515_4891',
    description: 'Armonizar las relaciones',
    category: 'love',
    keywords: ['relaciones', 'armonía', 'conexión']
  },
  {
    id: 'lo-7',
    sequence: '706',
    description: 'Perdón',
    category: 'love',
    keywords: ['perdón', 'liberación', 'sanación']
  },
  {
    id: 'lo-8',
    sequence: '314819_719_579',
    description: 'Atracción',
    category: 'love',
    keywords: ['atracción', 'magnetismo', 'carisma']
  },
  {
    id: 'lo-9',
    sequence: '314821069_711',
    description: 'Comprensión mutua',
    category: 'love',
    keywords: ['comprensión', 'empatía', 'conexión']
  },

  // CASA Y PROPIEDADES
  {
    id: 'ho-1',
    sequence: '975198931',
    description: 'Casa propia / Hacer del hogar un espacio de amor',
    category: 'home',
    keywords: ['casa', 'hogar', 'amor', 'propiedad']
  },
  {
    id: 'ho-2',
    sequence: '54121381948',
    description: 'Venta de casa/propiedad / Ventas',
    category: 'home',
    keywords: ['venta', 'propiedad', 'inmobiliaria']
  },
  {
    id: 'ho-3',
    sequence: '31848561',
    description: 'Alquiler de inmuebles',
    category: 'home',
    keywords: ['alquiler', 'inmueble', 'renta']
  },
  {
    id: 'ho-4',
    sequence: '516_718_419_712',
    description: 'Adquirir Bienes / Contrato Compra Inmueble',
    category: 'home',
    keywords: ['adquirir', 'bienes', 'compra', 'inmueble']
  },
  {
    id: 'ho-5',
    sequence: '715',
    description: 'Mudarse de casa',
    category: 'home',
    keywords: ['mudanza', 'cambio', 'nuevo hogar']
  },

  // TRABAJO Y NEGOCIOS
  {
    id: 'wo-1',
    sequence: '218_494517601',
    description: 'Empleo',
    category: 'work',
    keywords: ['empleo', 'trabajo', 'ocupación']
  },
  {
    id: 'wo-2',
    sequence: '819_716',
    description: 'Saber reconocer y aprovechar oportunidades de trabajo',
    category: 'work',
    keywords: ['oportunidades', 'trabajo', 'aprovechar']
  },
  {
    id: 'wo-3',
    sequence: '14111963',
    description: 'Armonizar todos los aspectos de mi vida profesional',
    category: 'work',
    keywords: ['profesional', 'armonía', 'equilibrio']
  },
  {
    id: 'wo-4',
    sequence: '419_814',
    description: 'Optimización de su trabajo',
    category: 'work',
    keywords: ['optimización', 'eficiencia', 'productividad']
  },
  {
    id: 'wo-5',
    sequence: '719_418_71',
    description: 'Organizar bien el trabajo',
    category: 'work',
    keywords: ['organización', 'orden', 'trabajo']
  },
  {
    id: 'wo-6',
    sequence: '138',
    description: 'Desenvolvimiento profesional',
    category: 'work',
    keywords: ['desenvolvimiento', 'habilidad', 'profesional']
  },
  {
    id: 'wo-7',
    sequence: '419_819_719_81',
    description: 'Crecimiento de pequeñas empresas',
    category: 'work',
    keywords: ['empresas', 'crecimiento', 'negocios']
  },
  {
    id: 'wo-8',
    sequence: '3986497851',
    description: 'Ventas intensivas',
    category: 'work',
    keywords: ['ventas', 'comercial', 'negocios']
  },
  {
    id: 'wo-9',
    sequence: '91688',
    description: 'Remover obstáculos',
    category: 'work',
    keywords: ['obstáculos', 'bloqueos', 'liberación']
  },

  // ESPIRITUALIDAD
  {
    id: 'sp-1',
    sequence: '11981',
    description: 'Conexión con el Creador',
    category: 'spirituality',
    keywords: ['creador', 'conexión', 'divino']
  },
  {
    id: 'sp-2',
    sequence: '319817318',
    description: 'Macrosalvación / Salvación Global',
    category: 'spirituality',
    keywords: ['salvación', 'global', 'humanidad']
  },
  {
    id: 'sp-3',
    sequence: '19712893',
    description: 'Regresar a la frecuencia del Creador',
    category: 'spirituality',
    keywords: ['frecuencia', 'creador', 'vibración']
  },
  {
    id: 'sp-4',
    sequence: '12370744',
    description: 'Luz pura del Creador',
    category: 'spirituality',
    keywords: ['luz', 'pura', 'creador']
  },
  {
    id: 'sp-5',
    sequence: '8888',
    description: 'Protección Divina',
    category: 'spirituality',
    keywords: ['protección', 'divina', 'seguridad']
  },
  {
    id: 'sp-6',
    sequence: '71381921',
    description: 'Centrado sobre sí mismo',
    category: 'spirituality',
    keywords: ['centrado', 'interior', 'paz']
  },
  {
    id: 'sp-7',
    sequence: '818_8849482167',
    description: 'Clarividencia',
    category: 'spirituality',
    keywords: ['clarividencia', 'visión', 'percepción']
  },
  {
    id: 'sp-8',
    sequence: '35986',
    description: 'Desarrollar Intuición Elevada',
    category: 'spirituality',
    keywords: ['intuición', 'desarrollo', 'percepción']
  },
  {
    id: 'sp-9',
    sequence: '777',
    description: 'Milagros',
    category: 'spirituality',
    keywords: ['milagros', 'divino', 'sorprendente']
  },
  {
    id: 'sp-10',
    sequence: '8887',
    description: 'Espíritu de Dios',
    category: 'spirituality',
    keywords: ['espíritu', 'dios', 'divino']
  },

  // SALUD Y BIENESTAR
  {
    id: 'he-1',
    sequence: '1884321',
    description: 'Sanar cualquier condición física desconocida',
    category: 'health',
    keywords: ['sanar', 'curación', 'salud']
  },
  {
    id: 'he-2',
    sequence: '1888948',
    description: 'Cambia pensamientos negativos en positivos',
    category: 'health',
    keywords: ['pensamientos', 'positivos', 'transformación']
  },
  {
    id: 'he-3',
    sequence: '721348192',
    description: 'Auto curación',
    category: 'health',
    keywords: ['auto curación', 'sanación', 'interno']
  },
  {
    id: 'he-4',
    sequence: '817992191',
    description: 'Auto regeneración del organismo',
    category: 'health',
    keywords: ['regeneración', 'organismo', 'recuperación']
  },
  {
    id: 'he-5',
    sequence: '4812412',
    description: 'Perder peso',
    category: 'health',
    keywords: ['peso', 'adelgazar', 'forma']
  },
  {
    id: 'he-6',
    sequence: '2145432',
    description: 'Rejuvenecimiento',
    category: 'health',
    keywords: ['rejuvenecimiento', 'juventud', 'vitalidad']
  },
  {
    id: 'he-7',
    sequence: '1489999',
    description: 'Salud física eterna / Vida eterna',
    category: 'health',
    keywords: ['eterno', 'salud', 'vida']
  },
  {
    id: 'he-8',
    sequence: '1814321',
    description: 'Salud perfecta',
    category: 'health',
    keywords: ['salud', 'perfecta', 'bienestar']
  },
  {
    id: 'he-9',
    sequence: '498716988_079',
    description: 'Vitalidad',
    category: 'health',
    keywords: ['vitalidad', 'energía', 'fuerza']
  },
  {
    id: 'he-10',
    sequence: '1001105010',
    description: 'Equilibrio Interno y Paz',
    category: 'health',
    keywords: ['equilibrio', 'paz', 'interno']
  },

  // METAS Y DESEOS
  {
    id: 'go-1',
    sequence: '889',
    description: 'Materializar Metas',
    category: 'goals',
    keywords: ['metas', 'materializar', 'logros']
  },
  {
    id: 'go-2',
    sequence: '51849131989',
    description: 'Deseo cumplido',
    category: 'goals',
    keywords: ['deseo', 'cumplido', 'manifestación']
  },
  {
    id: 'go-3',
    sequence: '918197185',
    description: 'Manifestado en un 100%',
    category: 'goals',
    keywords: ['manifestar', '100%', 'total']
  },
  {
    id: 'go-4',
    sequence: '718981',
    description: 'Acción y realización inmediata',
    category: 'goals',
    keywords: ['acción', 'inmediata', 'realización']
  },
  {
    id: 'go-5',
    sequence: '741',
    description: 'Resultados rápidos',
    category: 'goals',
    keywords: ['rápido', 'resultados', 'efectivo']
  },

  // ESTUDIOS Y CONOCIMIENTO
  {
    id: 'st-1',
    sequence: '58961431798',
    description: 'Aumentar IQ / Intelecto',
    category: 'studies',
    keywords: ['IQ', 'intelecto', 'inteligencia']
  },
  {
    id: 'st-2',
    sequence: '212585212',
    description: 'Éxito en los estudios',
    category: 'studies',
    keywords: ['éxito', 'estudios', 'académico']
  },
  {
    id: 'st-3',
    sequence: '298761_519_314',
    description: 'Memorizar',
    category: 'studies',
    keywords: ['memorizar', 'memoria', 'recordar']
  },
  {
    id: 'st-4',
    sequence: '39119488061',
    description: 'Entendimiento y Comprensión',
    category: 'studies',
    keywords: ['entendimiento', 'comprensión', 'entender']
  },
  {
    id: 'st-5',
    sequence: '96624756378',
    description: 'Aprender Idiomas Extranjeros',
    category: 'studies',
    keywords: ['idiomas', 'aprender', 'extranjero']
  }
];

// Significado de los números según Grabovoi
export const numberMeanings: Record<string, string> = {
  '0': 'Paso / Período de transición',
  '1': 'Primera / temprano / Inicio',
  '2': 'Acción',
  '3': 'Resultado / Meta / Creador',
  '4': 'Correlación con el mundo exterior / Comunicación',
  '5': 'Correlación con el mundo interno / Autoestima',
  '6': 'Información del sistema óptico / Principios',
  '7': 'Plataforma para el desarrollo del alma / Amor',
  '8': 'Estructura espacio-temporal / Infinito',
  '9': 'Relación con el número creador'
};

// Función para obtener números por categoría
export function getNumbersByCategory(category: Category): GrabovoiNumber[] {
  return grabovoiNumbers.filter(num => num.category === category);
}

// Función para obtener un número aleatorio
export function getRandomNumber(): GrabovoiNumber {
  const randomIndex = Math.floor(Math.random() * grabovoiNumbers.length);
  return grabovoiNumbers[randomIndex];
}

// Función para buscar números por palabra clave
export function searchNumbers(query: string): GrabovoiNumber[] {
  const lowerQuery = query.toLowerCase();
  return grabovoiNumbers.filter(num => 
    num.description.toLowerCase().includes(lowerQuery) ||
    num.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)) ||
    num.sequence.toLowerCase().includes(lowerQuery)
  );
}

// Función para calcular el número del día (numerología)
export function calculateDayNumber(date: Date): number {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Sumar todos los dígitos
  let sum = 0;
  const dateStr = `${day}${month}${year}`;
  for (const char of dateStr) {
    sum += parseInt(char);
  }
  
  // Reducir a un solo dígito
  while (sum > 9) {
    let newSum = 0;
    const sumStr = sum.toString();
    for (const char of sumStr) {
      newSum += parseInt(char);
    }
    sum = newSum;
  }
  
  return sum;
}

// Función para obtener números relacionados con el número del día
export function getNumbersForDay(date: Date): GrabovoiNumber[] {
  const dayNumber = calculateDayNumber(date);
  
  // Buscar números que contengan el dígito del día de manera significativa
  return grabovoiNumbers.filter(num => {
    const cleanSequence = num.sequence.replace(/_/g, '');
    // El número del día aparece al inicio o es relevante
    return cleanSequence.startsWith(dayNumber.toString()) || 
           num.sequence.includes(dayNumber.toString());
  }).slice(0, 5); // Limitar a 5 resultados
}

// Función para obtener la info de una categoría
export function getCategoryInfo(categoryId: Category): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}
