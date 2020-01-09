import File from '../models/File';

class FileController {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path
        })

        return res.json(file);
    }

    async index(req, res) {
        const { id, name, url } = await File.findByPk(req.params.id)

        return res.json({ id, name, url });
    }
}

export default new FileController;
