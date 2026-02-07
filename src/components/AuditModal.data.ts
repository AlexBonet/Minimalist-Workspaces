/**
 * AuditModal Data
 * 
 * Static data and type definitions for the AuditModal component.
 * This file contains prescriptions, analysis messages, and type definitions.
 */

export type Role = "developer" | "designer" | "writer" | "trader";
export type Problem = "clutter" | "lighting" | "ergonomics" | "distraction";
export type Budget = "minimalist" | "midrange" | "premium";

export interface FormData {
  role: Role;
  problem: Problem;
  budget: Budget;
}

export const ANALYSIS_MESSAGES = [
  "audit.analysis.scanning",
  "audit.analysis.calculating",
  "audit.analysis.reducing",
  "audit.analysis.generating",
] as const;

export const PRESCRIPTIONS = {
  en: {
    developer: {
      clutter: {
        diagnosis: "Cognitive overload detected.",
        prescription:
          "Apply the 'Japanese 5S' method. Remove all objects not used daily.",
        recommend: "Monitor Lightbar and Wireless Peripherals.",
      },
      lighting: {
        diagnosis: "Eye strain risk identified.",
        prescription:
          "Implement bias lighting behind monitors. Use 5000K color temperature.",
        recommend: "LED Strip Kit and Desk Lamp with adjustable CCT.",
      },
      ergonomics: {
        diagnosis: "Repetitive strain indicators present.",
        prescription:
          "Position monitor at arm's length. Keep wrists neutral on keyboard.",
        recommend: "Monitor Arm and Ergonomic Keyboard.",
      },
      distraction: {
        diagnosis: "Focus fragmentation detected.",
        prescription:
          "Create visual barriers. Use noise-canceling solution. Single-task your displays.",
        recommend: "Noise-canceling Headphones and Desk Divider.",
      },
    },
    designer: {
      clutter: {
        diagnosis: "Creative chaos exceeding optimal levels.",
        prescription:
          "Designate zones: active project vs. archive. Use vertical storage.",
        recommend: "Pegboard System and Cable Management Kit.",
      },
      lighting: {
        diagnosis: "Color accuracy compromised.",
        prescription:
          "Use D65 illuminant for color-critical work. Eliminate mixed lighting sources.",
        recommend: "High CRI Desk Lamp and Blackout Curtains.",
      },
      ergonomics: {
        diagnosis: "Drawing posture strain detected.",
        prescription:
          "Tilt work surface 15-20°. Alternate between sitting and standing.",
        recommend: "Drawing Board and Sit-Stand Desk Converter.",
      },
      distraction: {
        diagnosis: "Visual noise disrupting ideation.",
        prescription:
          "Face blank wall during deep work. Minimize decorative elements in FOV.",
        recommend: "Acoustic Panels and Minimal Desk Mat.",
      },
    },
    writer: {
      clutter: {
        diagnosis: "Mental fog from physical chaos.",
        prescription:
          "Single notebook policy. Digital-first for references. Clear desk ritual.",
        recommend: "Document Scanner and Minimalist Notebook.",
      },
      lighting: {
        diagnosis: "Reading fatigue indicators present.",
        prescription:
          "Use indirect lighting. Maintain 500 lux on work surface.",
        recommend: "Asymmetric Desk Lamp and E-ink Monitor.",
      },
      ergonomics: {
        diagnosis: "Typing endurance compromised.",
        prescription:
          "Negative tilt keyboard position. Take micro-breaks every 25 minutes.",
        recommend: "Split Keyboard and Wrist Rest.",
      },
      distraction: {
        diagnosis: "Attention fragmentation critical.",
        prescription:
          "Use distraction-free writing tools. Phone in another room.",
        recommend: "Focus-mode Editor and Phone Lockbox.",
      },
    },
    trader: {
      clutter: {
        diagnosis: "Decision latency from visual noise.",
        prescription:
          "Minimize to essential displays only. Remove non-trading materials.",
        recommend: "Multi-Monitor Arm and Cable Tray.",
      },
      lighting: {
        diagnosis: "Screen glare affecting chart readability.",
        prescription:
          "Use matte screens. Position lights to eliminate reflections.",
        recommend: "Anti-glare Screen Protectors and Bias Lighting.",
      },
      ergonomics: {
        diagnosis: "Extended session fatigue detected.",
        prescription:
          "Use supportive seating. Monitors at eye level. Standing intervals.",
        recommend: "Ergonomic Chair and Height-adjustable Desk.",
      },
      distraction: {
        diagnosis: "Alert overload detected.",
        prescription:
          "Consolidate notifications. Use audio cues over visual for secondary alerts.",
        recommend: "Notification Manager and Bone Conduction Headset.",
      },
    },
  },
  es: {
    developer: {
      clutter: {
        diagnosis: "Sobrecarga cognitiva detectada.",
        prescription:
          "Aplica el método japonés '5S'. Elimina objetos no usados diariamente.",
        recommend: "Barra de luz para monitor y periféricos inalámbricos.",
      },
      lighting: {
        diagnosis: "Riesgo de fatiga visual identificado.",
        prescription:
          "Implementa luz ambiental detrás de monitores. Usa temperatura de 5000K.",
        recommend:
          "Kit de tiras LED y lámpara de escritorio con CCT ajustable.",
      },
      ergonomics: {
        diagnosis: "Indicadores de tensión repetitiva presentes.",
        prescription:
          "Posiciona el monitor a distancia de brazo. Mantén muñecas neutrales.",
        recommend: "Brazo de monitor y teclado ergonómico.",
      },
      distraction: {
        diagnosis: "Fragmentación del enfoque detectada.",
        prescription:
          "Crea barreras visuales. Usa solución de cancelación de ruido.",
        recommend:
          "Auriculares con cancelación de ruido y divisor de escritorio.",
      },
    },
    designer: {
      clutter: {
        diagnosis: "Caos creativo excediendo niveles óptimos.",
        prescription:
          "Designa zonas: proyecto activo vs. archivo. Usa almacenamiento vertical.",
        recommend: "Sistema de panel perforado y kit de gestión de cables.",
      },
      lighting: {
        diagnosis: "Precisión de color comprometida.",
        prescription:
          "Usa iluminante D65 para trabajo crítico de color. Elimina fuentes mixtas.",
        recommend: "Lámpara de alto CRI y cortinas opacas.",
      },
      ergonomics: {
        diagnosis: "Tensión postural de dibujo detectada.",
        prescription:
          "Inclina superficie de trabajo 15-20°. Alterna entre sentado y de pie.",
        recommend: "Tablero de dibujo y convertidor de escritorio sit-stand.",
      },
      distraction: {
        diagnosis: "Ruido visual interrumpiendo ideación.",
        prescription:
          "Mira pared vacía durante trabajo profundo. Minimiza decoración en FOV.",
        recommend: "Paneles acústicos y alfombrilla de escritorio minimalista.",
      },
    },
    writer: {
      clutter: {
        diagnosis: "Niebla mental por caos físico.",
        prescription:
          "Política de cuaderno único. Digital primero para referencias.",
        recommend: "Escáner de documentos y cuaderno minimalista.",
      },
      lighting: {
        diagnosis: "Indicadores de fatiga de lectura presentes.",
        prescription:
          "Usa iluminación indirecta. Mantén 500 lux en superficie de trabajo.",
        recommend: "Lámpara de escritorio asimétrica y monitor E-ink.",
      },
      ergonomics: {
        diagnosis: "Resistencia de escritura comprometida.",
        prescription:
          "Posición de teclado con inclinación negativa. Micro-pausas cada 25 min.",
        recommend: "Teclado dividido y reposamuñecas.",
      },
      distraction: {
        diagnosis: "Fragmentación de atención crítica.",
        prescription:
          "Usa herramientas de escritura sin distracciones. Teléfono en otra habitación.",
        recommend: "Editor de modo enfoque y caja de bloqueo de teléfono.",
      },
    },
    trader: {
      clutter: {
        diagnosis: "Latencia de decisión por ruido visual.",
        prescription:
          "Minimiza a pantallas esenciales. Elimina materiales no relacionados.",
        recommend: "Brazo multi-monitor y bandeja de cables.",
      },
      lighting: {
        diagnosis: "Reflejos afectando legibilidad de gráficos.",
        prescription:
          "Usa pantallas mate. Posiciona luces para eliminar reflejos.",
        recommend: "Protectores anti-reflejos y luz ambiental.",
      },
      ergonomics: {
        diagnosis: "Fatiga de sesión extendida detectada.",
        prescription:
          "Usa asiento con soporte. Monitores a nivel de ojos. Intervalos de pie.",
        recommend: "Silla ergonómica y escritorio de altura ajustable.",
      },
      distraction: {
        diagnosis: "Sobrecarga de alertas detectada.",
        prescription:
          "Consolida notificaciones. Usa señales de audio sobre visuales.",
        recommend: "Gestor de notificaciones y auriculares de conducción ósea.",
      },
    },
  },
} as const;
