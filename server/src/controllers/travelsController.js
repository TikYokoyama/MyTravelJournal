const { request } = require("express");
const Travels = require("../models/Travels");

const travelsController = {

    //OK
    async createTravel(req, res) {
        const { title, location, googleMapUrl, startDate, endDate, descrip, image, continent } = req.body;

        if (!title || !location || !googleMapUrl || !startDate || !endDate || !descrip || !image || !continent) {
            return res.status(400).json("Preencha todos os campos corretamente");
        };

        const newTravel = await Travels.create({
            title,
            location,
            googleMapUrl,
            startDate,
            endDate,
            descrip,
            image,
            continent
        });
        res.status(201).json(newTravel);
    },

    //OK
    async listTravels(req, res) {
        try {

            const travels = await Travels.findAll();

            return res.status(200).json(travels);

        }
        catch (error) {
            console.log(error);
            return res.status(500).json("Não foi possível listar os dados")
        }
    },

    //OK
    async listTravelAlphabet(req, res) {
        try {

            const travels = await Travels.findAll();
            const alphabeticOrder = travels.sort((a, b) => a.title.localeCompare(b.title));
            return res.status(200).json(alphabeticOrder);

        }
        catch (error) {
            console.log(error);
            return res.status(500).json("Não foi possível listar os dados")
        }
    },

    //OK
    async listTravelsByContinent(req, res) {
        try {

            const { continent } = req.params;

            if(continent == undefined ){
                return res.status(400).json("continente nao foi passado como parametro")
            }
            
            const continentLocation = await Travels.findAll({
                where: {
                    continent: continent
                }
            })

            return res.status(200).json(continentLocation);

        }
        catch (error) {
            console.log(error);
            return res.status(500).json("Não foi possível listar os dados")
        }
    },

    //OK
    async deleteTravel(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json("id nao encontrado");
            }

            await Travels.destroy({
                where: {
                    id
                }
            })

            return res.status(204).json("Viagem deletado com sucesso");

        } catch (error) {
            res.json("Falha ao tentar deletar Viagem");
            console.error(error);
        }
    },

    //OK
    async updateTravel(req, res) {
        try {
            const { id } = req.params;
            const { title, location, googleMapUrl, startDate, endDate, descrip, image, continent } = req.body;

            if (!id) {
                return res.status(400).json("Id nao encontrado");
            }

            await Travels.update(
                {
                    title,
                    location,
                    googleMapUrl,
                    startDate,
                    endDate,
                    descrip,
                    image,
                    continent
                },
                {
                    where: {
                        id
                    }
                }
            );

            const updatedTravel = await Travels.findByPk(id);

            return res.status(200).json(updatedTravel);

        } catch (error) {
            res.status(404).json("Verfique os dados e tente novamente");
            console.error(error);
        }
    },

}

module.exports = travelsController;