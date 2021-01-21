function SugarCane() {

    this.start = () => {
        this.getClick(); //captura os cliques
        this.getEnter(); //Captura o Enter
    };

    this.getClick = () => {
        document.addEventListener('click', e => {
            let dataEntry = document.getElementById('quantity');

            const el = e.target;
            if (el.classList.contains('btnCalcular'))this.doAccount(); //Realiza o Calculo
            dataEntry.value = '';
        });

    };
    
    this.getEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.doAccount();
            }
        })
    }

    //METODOS
    this.doAccount = (el) => {
        let dataEntry = document.getElementById('quantity').value
        let mols = dataEntry * 22;
        let result = mols * 2.57;

        if (!dataEntry) {
            alert('Digite um numero valido');
        } else {            
            alert(`total: R$ ${result.toFixed(2)}`);
        }           
    }


}

const sugarCane = new SugarCane();
sugarCane.start();