
import ringJointPDF from "../assets/products/empaque-ring-joint/PDF.pdf";
import spiralGasketPDF from "../assets/products/empaque-espirometalico/PDF.pdf";

// Cargar automáticamente las imágenes de los productos
const productImages = import.meta.glob(
  "../assets/products/*/producto.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Obtener la imagen correspondiente a cada producto
function getProductImage(slug) {
  const image = Object.entries(productImages).find(([path]) =>
    path.includes(`/${slug}/`)
  );

  return image ? image[1] : "";
}

const products = [
  {
    id: 1,
    slug: "empaque-ring-joint",
    name: "Empaque Ring Joint",
    category: "Empaques industriales",
    brand: "Fitting Valves",

    shortDescription:
      "Empaques metálicos diseñados para proporcionar un sellado confiable en conexiones industriales de alta presión.",

    description:
      "Los empaques Ring Joint están diseñados para aplicaciones industriales que requieren un sellado metálico confiable. Se utilizan en conexiones de bridas especialmente preparadas para este tipo de empaque.",

    image: getProductImage("empaque-ring-joint"),
    technicalSheet: ringJointPDF,

    specifications: [
      { label: "Diámetro", value: '½” – 36”' },
      {
        label: "Presión",
        value: "150 – 2500 ANSI, BS y MSS / 3000 – 5000 API",
      },
      { label: "Estilos", value: "R, RX, B y BX" },
      {
        label: "Materiales estándar",
        value: "Soft Iron, acero inoxidable 304, 316, 347 y 410",
      },
      {
        label: "Aleaciones",
        value: "600, 625, 800 y 825",
      },
      {
        label: "Materiales especiales",
        value: "Monel, Inconel, Incoloy y Hastelloy",
      },
      { label: "Normas", value: "API 6A / ASME B16.20" },
    ],
  },

  {
    id: 2,
    slug: "valvula-mariposa-bray",
    name: "Válvula mariposa Bray",
    category: "Válvulas industriales",
    brand: "Bray",

    shortDescription:
      "Válvulas de alto rendimiento para aplicaciones industriales que requieren un control confiable del flujo.",

    description:
      "Fitting Valves ofrece válvulas mariposa Bray de triple excentricidad, alto rendimiento, revestimiento y asiento resiliente, diseñadas para responder a las exigencias de diferentes aplicaciones industriales.",

    image: getProductImage("valvula-mariposa-bray"),
    technicalSheet: null,

    specifications: [
      {
        label: "Tipo",
        value: "Válvula mariposa",
      },
      {
        label: "Diseño",
        value: "Triple excentricidad y alto rendimiento",
      },
      {
        label: "Características",
        value: "Revestimiento y asiento resiliente",
      },
    ],
  },

  {
    id: 3,
    slug: "cap-industrial",
    name: "CAP",
    category: "Accesorios para tubería",
    brand: "Steeltrade",

    shortDescription:
      "Accesorio industrial utilizado para cerrar los extremos de sistemas de tuberías mediante conexiones soldadas.",

    description:
      "Los CAP son accesorios para tubería fabricados para conexiones mediante soldadura a tope. Fitting Valves ofrece diferentes tamaños, espesores y materiales para aplicaciones industriales.",

    image: getProductImage("cap-industrial"),
    technicalSheet: null,

    specifications: [
      {
        label: "Gama de tamaños",
        value: '½” – 56”',
      },
      {
        label: "Espesores",
        value: "SCH5 a XXS",
      },
      {
        label: "Proceso",
        value: "Soldadura a tope, sin costura",
      },
      {
        label: "Materiales",
        value: "Acero al carbono, inoxidable, aleaciones, dúplex y súper dúplex",
      },
      {
        label: "Normas",
        value: "ASME B16.9, ASME B16.25 y MSS SP75",
      },
    ],
  },

  {
    id: 4,
    slug: "trampa-vapor-balde-invertido",
    name: "Trampa de vapor de balde invertido",
    category: "Sistemas de vapor",
    brand: "Watson McDaniel",

    shortDescription:
      "Sistema diseñado para descargar condensado mediante un mecanismo de balde invertido.",

    description:
      "Estas trampas utilizan un balde invertido como dispositivo de flotación para controlar la apertura y el cierre del tapón y el asiento, permitiendo descargar el condensado de los sistemas de vapor.",

    image: getProductImage("trampa-vapor-balde-invertido"),
    technicalSheet: null,

    specifications: [
      {
        label: "Funcionamiento",
        value: "Mecanismo de balde invertido",
      },
      {
        label: "Materiales del cuerpo",
        value: "Hierro fundido e inoxidable",
      },
      {
        label: "Presión",
        value: "Hasta 450 psig",
      },
      {
        label: "Aplicaciones",
        value: "Drenaje de condensado y aplicaciones de goteo",
      },
      {
        label: "Características",
        value: "Orificio de descarga superior, menos susceptible a obstrucciones",
      },
    ],
  },

  {
  id: 5,
  slug: "empaque-espirometalico",
  name: "Empaque espirometálico",
  category: "Empaques industriales",
  brand: "Fitting Valves",

  shortDescription:
    "Solución de sellado industrial para conexiones bridadas que requieren resistencia y confiabilidad.",

  description:
    "Los empaques espirometálicos están diseñados para proporcionar un sellado eficiente en conexiones bridadas sometidas a condiciones exigentes de presión y temperatura. Su construcción combina elementos metálicos y materiales de relleno que permiten adaptarse a diferentes aplicaciones industriales.",

  image: getProductImage("empaque-espirometalico"),
  technicalSheet: spiralGasketPDF,

  specifications: [
    {
      label: "Tipo de construcción",
      value: "Espiral metálica"
    },
    {
      label: "Material de enrollamiento",
      value: "Acero inoxidable o acero al carbono"
    },
    {
      label: "Material de relleno",
      value: "Grafito flexible o PTFE"
    },
    {
      label: "Anillo interior",
      value: "Acero inoxidable o acero al carbono"
    },
    {
      label: "Anillo exterior",
      value: "Acero al carbono o acero inoxidable"
    },
    {
      label: "Tipo de conexión",
      value: "Bridada"
    },
    {
      label: "Aplicación",
      value: "Sellado de conexiones industriales"
    },
    {
      label: "Normativa de referencia",
      value: "ASME B16.20"
    },
    {
      label: "Sectores de aplicación",
      value: "Petróleo, gas, petroquímica y generación de energía"
    }
  ],
},
];

export default products;
