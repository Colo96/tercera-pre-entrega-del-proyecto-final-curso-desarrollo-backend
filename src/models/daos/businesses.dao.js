const BusinessesModel = require("../schema/businesses.schema");

class BusinessesDAO {
    async getBusinesses() {
        const businesses = await BusinessesModel.find().lean();
        return businesses;
    }

    async getBusinessById(id) {
        const business = await BusinessesModel.findOne({ _id: id }).lean();
        return business;
    }

    async createBusiness(business) {
        const createdBusiness = await BusinessesModel.create(business);
        return createdBusiness;
    }

    async updateBusinessById(id, business) {
        const updatedBusiness = await BusinessesModel.updateOne({ _id: id }, { $set: business }).lean();
        return updatedBusiness;
    }

    async deleteBusinessById(id) {
        const deletedBusiness = await BusinessesModel.deleteOne({ _id: id });
        return deletedBusiness;
    }

    async addProductToBusiness(id, product) {
        const addedProductToBusiness = await BusinessesModel.updateOne({ _id: id }, { $push: { products: product } });
        return addedProductToBusiness;
    }
}

module.exports = BusinessesDAO;