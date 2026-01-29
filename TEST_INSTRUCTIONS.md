# Instrucciones para ejecutar el proyecto en entorno de pruebas

## Estado actual ✅
El proyecto está configurado correctamente para ejecutar pruebas con **Vitest**.

### Dependencias instaladas
- ✅ Todas las dependencias han sido instaladas correctamente
- ✅ Vitest configurado con entorno jsdom
- ✅ Testing Library integrado
- ✅ TypeScript configurado para tests

### Configuración lista
- **Framework de pruebas**: Vitest v3.2.4
- **Entorno**: jsdom (para simular DOM del navegador)
- **Setup de pruebas**: `src/test/setup.ts`
- **Patrón de archivos**: `src/**/*.{test,spec}.{ts,tsx}`

## Comandos disponibles

### Ejecutar pruebas una sola vez
```bash
npm test
```

### Ejecutar pruebas en modo watch (desarrollo)
```bash
npm run test:watch
```

### Lint del código
```bash
npm run lint
```

### Build para desarrollo
```bash
npm run build:dev
```

### Build para producción
```bash
npm run build
```

### Ejecutar servidor de desarrollo
```bash
npm run dev
```

## Estructura de pruebas

### Ubicación
- Archivos de prueba: `src/**/*.test.ts` o `src/**/*.spec.tsx`
- Setup global: `src/test/setup.ts`

### Ejemplo básico
```typescript
import { describe, it, expect } from "vitest";

describe("Mi componente", () => {
  it("debería pasar la prueba", () => {
    expect(true).toBe(true);
  });
});
```

### Ejemplo con React Testing Library
```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MyComponent from "@/components/MyComponent";

describe("MyComponent", () => {
  it("debería renderizar correctamente", () => {
    render(<MyComponent />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
```

## Archivos de configuración

### vitest.config.ts
Configuración principal de Vitest con:
- Plugin de React
- Alias de rutas (`@/` → `./src/`)
- Entorno jsdom
- Archivos de setup

### tsconfig.json
TypeScript configurado para permitir:
- Imports con alias `@/*`
- Flexible null checking para pruebas

### .env.test
Variables de entorno para el modo de pruebas

## Verificación de estado

Todo está listo para ejecutar pruebas:
```
✅ npm install completado
✅ Vitest configurado
✅ Testing Library disponible
✅ Tests de ejemplo pasando (1/1)
```

## Próximos pasos

1. Crea archivos `.test.ts` o `.spec.tsx` junto a tus componentes
2. Ejecuta `npm test` para verificar
3. O usa `npm run test:watch` durante desarrollo
4. Los tests se ejecutarán automáticamente al cambiar archivos

## Resolución de problemas

Si tienes problemas:
1. Verifica que npm esté actualizado: `npm --version`
2. Limpia node_modules y reinstala: `rm -r node_modules && npm install`
3. Revisa la configuración en `vitest.config.ts`
4. Consulta la documentación: https://vitest.dev/
