import * as BruxoModel from './../models/bruxoModel.js';

export const listarTodos = async (req, res) => {
    try {
        const bruxos = await BruxoModel.findAll();

        if (!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total: bruxos.length,
                mensagem: 'Não há bruxos na lista',
                bruxos
            })
            
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'lista de bruxos',
            bruxos
        })

    } catch (error) {
    res.status(500).json({ 
        erro: 'erro interno do servidor',
        detalhes: error.message,
        status: 500
       })
    }
}
