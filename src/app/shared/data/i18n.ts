export const i18n = {
  global: {
    brand: 'Marcas Internacionales',
    secureAndEncrypted: 'Seguro y Encriptado',
    currency: 'PEN',
    currencySymbol: 'S/'
  },
  categories: {
    title: "Categorías"
  },
  navbar: {
    links: {
      perfumes: 'Perfumes',
      newArrivals: 'Novedades',
      brands: 'Marcas'
    },
    actions: {
      search: 'Search',
      user: 'User',
      wishlist: 'Wishlist',
      cart: 'Cart'
    }
  },
  footer: {
    brandSubtitle: 'Descubre el arte de la perfumería fina. Fragancias exclusivas curadas para elevar tus sentidos.',
    shop: {
      title: 'Tienda',
      links: [
        'Perfumes Femeninos',
        'Perfumes Masculinos',
        'Unisex',
        'Cofres de Regalo',
        'Novedades',
        'Cuidados de Piel',
        'Maquillaje',
        'Accesorios'
      ]
    },
    support: {
      title: 'Atención',
      links: [
        'Seguimiento de orden',
        'Envíos y Devoluciones',
        'Preguntas Frecuentes',
        'Contáctanos'
      ]
    },
    newsletter: {
      title: 'Mantente Informado',
      subtitle: 'Recibe las últimas novedades de la perfumería.',
      placeholder: 'Tu correo electrónico'
    },
    copyright: '© 2026 Marcas Internacionales Perfumería. Todos los derechos reservados.',
    legal: {
      terms: 'Términos',
      privacy: 'Privacidad'
    }
  },
  home: {
    hero: {
      subtitle: 'COLECCIÓN OTOÑO',
      title: 'La esencia de<br>lo inesperado',
      cta: 'Explorar Colección'
    },
    newArrivals: {
      title: 'Novedades',
      viewAll: 'Ver todo'
    },
    spotlight: {
      title: 'Atelier Exclusivo',
      description: 'Descubre las notas secretas detrás de las creaciones más aclamadas de la perfumería contemporánea.',
      cta: 'Conozca la historia'
    },
    location: {
      sectionTitle: 'Ubicación',
      title: 'Nuestra Tienda Física',
      subtitle: 'Visítanos y experimenta la esencia en persona.',
      address: 'Av. Cnel. Mendoza 1918, Tacna 23001, Perú',
      schedule: 'Lunes a Sábado: 9:00 AM - 8:00 PM',
      mapCta: 'Ver en Google Maps'
    }
  },
  catalog: {
    breadcrumb: 'Inicio',
    breadcrumbCurrent: 'Perfumes',
    title: 'Perfumes Femeninos',
    resultsTarget: 'resultados',
    sortOptions: [
      'Ordenar por: Relevancia',
      'Precio: Mayor a menor',
      'Precio: Menor a mayor'
    ],
    filters: {
      category: 'Categoría',
      family: 'Familia Olfativa',
      price: 'Precio',
      minPrice: 'Min S/',
      maxPrice: 'Max S/'
    }
  },
  productDetail: {
    breadcrumb: ['Inicio', 'Perfumes'],
    size: 'Tamaño',
    addToCart: 'Añadir al carrito',
    notes: {
      title: 'Notas de Fragancia',
      top: 'Notas de salida',
      topValue: 'Cardamomo, Iris, Violeta',
      heart: 'Notas de corazón',
      heartValue: 'Papiro, Madera de sándalo australiano',
      base: 'Notas de fondo',
      baseValue: 'Madera de cedro, Cuero, Almizcle'
    },
    notFound: {
      title: 'Colección Desconocida',
      message: 'El producto solicitado no forma parte de nuestro catálogo actual de Marcas Internacionales.',
      cta: 'Explorar la Tienda'
    }
  },
  cart: {
    title: 'Tu Pedido',
    summary: {
      title: 'Resumen',
      subtotal: 'Subtotal',
      shipping: 'Envío (Estándar)',
      shippingFree: 'Gratuito',
      taxesIncluded: 'Impuestos incluidos',
      total: 'Total Pedido',
      checkoutBtn: 'Ir a Checkout'
    }
  },
  checkout: {
    title: 'Checkout Seguro',
    steps: {
      personal: 'Datos Personales',
      shipping: 'Dirección de Envío',
      payment: 'Método de Pago',
      edit: 'Editar',
      completed: 'completado',
      processed: 'procesado'
    },
    form: {
      email: 'Correo Electrónico',
      emailPlaceholder: 'example@fineperfume.com',
      phone: 'Teléfono',
      phonePlaceholder: '+51 900 000 000',
      continueBtn: 'Continuar al Envío',
      continueToPaymentBtn: 'Continuar al Pago'
    },
    shipping: {
      title: 'Dirección de Envío',
      address: 'Calle y Número',
      addressPlaceholder: 'Dirección de entrega',
      city: 'Ciudad',
      cityPlaceholder: 'Tacna',
      reference: 'Referencia',
      referencePlaceholder: 'Edificio, dpto, etc.',
      methodTitle: 'Método de envío',
      primeExpress: 'Envío Prime Express',
      primeExpressDesc: '24-48 horas',
      free: 'Gratis'
    },
    payment: {
      title: 'Método de Pago',
      methodTitle: 'Método de pago',
      card: 'Tarjeta de Crédito / Débito',
      cardDesc: 'Pago seguro SSL',
      cashOnDelivery: 'Pago contra entrega',
      cashOnDeliveryDesc: 'No disponible',
      notAvailable: 'No disponible',
      cardName: 'Poseedor de la Tarjeta',
      cardNamePlaceholder: 'Nombre como aparece en la tarjeta',
      cardNumber: 'Número de Tarjeta',
      cardNumberPlaceholder: '0000 0000 0000 0000',
      expiry: 'Expiración',
      expiryPlaceholder: 'MM / YY',
      cvv: 'CVV',
      cvvPlaceholder: '•••',
      securePayment: 'Pago seguro SSL'
    },
    summary: {
      title: 'Resumen Pedido',
      items: 'artículos',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      shippingCalculated: 'Calculado en el siguiente paso',
      total: 'Total'
    },
    final: {
      submitBtn: 'Finalizar Adquisición',
      secure: 'CHECKOUT SEGURO',
      secureDesc: 'SSL · Datos encriptados',
      terms: 'Términos',
      privacy: 'Privacidad',
      termsNotice: 'Al completar esta compra, aceptas nuestros'
    }
  },
  auth: {
    title: 'Bienvenido de nuevo',
    subtitle: 'Accede a tu cuenta para una experiencia completa.',
    form: {
      email: 'Correo Electrónico',
      emailPlaceholder: 'nombre@correo.com',
      password: 'Contraseña',
      passwordPlaceholder: '••••••••',
      forgotPassword: '¿Olvidaste tu contraseña?',
      rememberMe: 'Recordarme en este dispositivo',
      loginBtn: 'Iniciar Sesión',
      noAccount: '¿No tienes cuenta?',
      createAccount: 'Crear cuenta'
    }
  }
};
