import '../../Styles/global-style.css';
function Header() {
    return (
        <header class="header" id="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10">
                        <i class="btn btn-lg text-white bi bi-list" id="header-toggle"></i>
                    </div>
                    <div class="col-2 text-white py-3">
                        <span>Nome</span>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;