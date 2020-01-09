import * as Yup from 'yup';
import Post from '../models/Post';
import File from '../models/File';

class PostController {
    async store(req, res) {

        const schema = Yup.object().shape({
            tipo: Yup.string().required(),
            title: Yup.string().required(),
            content: Yup.string(),
            file_id: Yup.number()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' })
        }

        const { id, tipo, title, file_id, content } = await Post.create(req.body);

        return res.json({
            id,
            tipo,
            title,
            content,
            file_id
        });
    }

    async index(req, res) {

        const posts = await Post.findAll({
            attributes: [
                'id',
                'tipo',
                'title',
                'file_id',
                'content'
            ],
            include: [{
                model: File,
                as: 'file',
                attributes: [
                    'name',
                    'path',
                    'url'
                ]
            }]
        });

        return res.json(posts)
    }


    async update(req, res) {
        const schema = Yup.object().shape({
            tipo: Yup.string().required(),
            title: Yup.string().required(),
            content: Yup.string(),
            file_id: Yup.number()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' })
        }

        const post = await Post.findByPk(req.body.id);


        const { id, tipo, title, file_id, content } = await post.update(req.body);

        return res.json({
            id, tipo, title, file_id, content
        });
    }

    async delete(req, res) {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send('Post excluido com sucesso');
    }
}

export default new PostController();
