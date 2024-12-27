import './style.css';
function CardDev() {
    return (
        <div class="row text-center">
            <div class="col-md-6">
                <div class="card mb-4">
                    <img src="IMG_20240128_201042_006.jpg" class="card-img-top" alt="Desenvolvedor 1" />
                    <div class="card-body">
                        <h5 class="card-title">Gabriel Vaz Scremim</h5>
                        <p class="card-text">Aluno do curso de Ciência da Computação da UniFil - Londrina e
                            estagiário no IDR-Paraná.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card mb-4">
                    <img src="segobi.jpeg" class="card-img-top" alt="Desenvolvedor 2" />
                    <div class="card-body">
                        <h5 class="card-title">Gabriel Segobi de Souza</h5>
                        <p class="card-text">Aluno do curso de Ciência da Computação da UniFil - Londrina</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDev;