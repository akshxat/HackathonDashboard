import Joi from "joi";

const campusSchema = Joi.object({
    campus_name: Joi.string().required()
})

const managerSchema = Joi.object({
    manager_name: Joi.string().required(),
    department_id: Joi.number().integer().required()
})


//We PATCH the resource by getting its department id, if we know the department id then the campus_id isnt required. This is the same for the Managers, Rooms, and safety_check tables. 
const departmentSchema = Joi.object({
    department_name: Joi.string().required(),
    campus_id: Joi.number().integer().required()
})


//should we specify the exact format? what if people write year-month-date and others write year-date-month 
const safetyCheckSchema = Joi.object({
    room_id: Joi.number().integer().required(),
    manager_id: Joi.number().integer().required(),
    status: Joi.string().required(),
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
    room_type: Joi.string().required(),
    department_id: Joi.number().integer().required()
})

const roomWorkshopPatchSchema = Joi.object({
    ...roomWorkshopFields
})

// Validates both post and patch
export const validateCampus = payload => {
    return campusSchema.validate(payload)
}

// Validates both post and patch
export const validateManager = payload => {
    return managerSchema.validate(payload)
}

// Validates both post and patch
export const validateDepartment = payload => {
    return departmentSchema.validate(payload)
}

// Validates post
export const validateRoomWorkshopPost = payload => {
    return roomWorkshopPostSchema.validate(payload)
}

// Validates patch
export const validateRoomWorkshopPatch = payload => {
    return roomWorkshopPatchSchema.validate(payload)
}

// Validates both post and patch
export const validateSafetyCheck = payload => {
    return safetyCheckSchema.validate(payload)
}