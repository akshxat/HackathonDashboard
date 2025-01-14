import Joi from "joi";

const campusSchema = Joi.object({
    campus_name: Joi.string().required()
})

const managerSchema = Joi.object({
    manager_name: Joi.string().required(),
    department_id: Joi.number().integer().required()
})

const departmentSchema = Joi.object({
    department_name: Joi.string().required(),
    campus_id: Joi.number().integer().required()
})

const safetyCheckSchema = Joi.object({
    status: Joi.string().required(),
    room_id: Joi.number().integer().required(),
    check_date: Joi.date().required(),
    issues_found: Joi.number().integer().required()
})

const roomWorkshopFields = {
    room_name: Joi.string(),
    room_type: Joi.string(),
    department_id: Joi.number().integer(),
    store_id: Joi.number().integer()
}

const roomWorkshopPostSchema = Joi.object({
    ...roomWorkshopFields,
    room_name: Joi.string().required(),
    department_id: Joi.number().integer()
})

const roomWorkshopPatchSchema = Joi.object({
    ...roomWorkshopFields
})

export const validateCampus = payload => {
    return campusSchema.validate(payload)
}

export const validateManager = payload => {
    return managerSchema.validate(payload)
}

export const validateDepartment = payload => {
    return departmentSchema.validate(payload)
}

export const validateRoomWorkshopPost = payload => {
    return roomWorkshopPostSchema.validate(payload)
}

export const validateRoomWorkshopPatch = payload => {
    return roomWorkshopPatchSchema.validate(payload)
}

export const validateSafetyCheck = payload => {
    return safetyCheckSchema.validate(payload)
}