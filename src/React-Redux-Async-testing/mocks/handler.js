import { rest } from 'msw';
// https://mswjs.io/docs/basics/response-resolver

export const handlers = [
    rest.get('http://localhost:3001/users', (req, res, ctx) => {
        return res(
            ctx.json([
                { "id": 1, "name": "User1", "location": "Location1" },
                { "id": 2, "name": "User2", "location": "Location2" },
            ])
        );
    }),
    rest.post('http://localhost:3001/users', (req, res, ctx) => {
        return res(
            ctx.json({
                "id": 3, "name": req.body.name, "location": req.body.location
            }),
        )
    })
];

