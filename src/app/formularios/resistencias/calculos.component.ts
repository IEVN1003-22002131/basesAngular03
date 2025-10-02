export class Resistencias {
    private valores: {[key: string]: number}= {
        'black':0, 
        'brown':1, 
        'red':2, 
        'orange':3, 
        'yellow':4,
        'green':5, 
        'blue':6, 
        'purple':7, 
        'gray':8, 
        'white':9
    };

    private multiplicadores: {[key:string]: number}= {
        'black':1, 
        'brown':10, 
        'red':100, 
        'orange':1000, 
        'yellow':10000,
        'green':100000, 
        'blue':1000000, 
        'purple':10000000, 
        'gray':100000000,
        'white':1000000000, 
        'gold':0.1, 
        'silver':0.01
    };

    private tolerancias: {[key:string]: number}= {
        'gold':0.05,
        'silver':0.10
    };
    calcularValores(banda1: string, banda2: string, multiplicador: string, tolerancia: string) {
        const valorBanda1 = this.valores[banda1];
        const valorBanda2 = this.valores[banda2];
        const valorBase = (valorBanda1 * 10) + valorBanda2;
        const valorMultiplicador = this.multiplicadores[multiplicador];
        const valorFinal = valorBase * valorMultiplicador;
        const valorTolerancia = this.tolerancias[tolerancia];
        const valorMaximo = valorFinal * (1 + valorTolerancia);
        const valorMinimo = valorFinal * (1 - valorTolerancia);

        return {
            valor: valorFinal,
            maximo: valorMaximo,
            minimo: valorMinimo
        };
    }
}