/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <table className="table table-bordered tabela-curvada">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Produto 1</td>
                <td>10.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
                <tr>
                <td>Produto 2</td>
                <td>19.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
                <tr>
                <td>Produto 3</td>
                <td>10.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
                <tr>
                <td>Produto 4</td>
                <td>10.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
                <tr>
                <td>Produto 5</td>
                <td>10.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
                <tr>
                <td>Produto 6</td>
                <td>10.99</td>
                <td>
                    <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                    Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">
                    Deletar
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}