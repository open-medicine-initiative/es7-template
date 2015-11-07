export class SymptomResource{

   static routes(){
      return [
        { type: 'GET', alias: 'symptom', url: '/symptom/:id', generator: GetSymptom}
        //{ type: 'PUT', alias: 'symptom', url: '/symptom', generator: PutSymptom}
      ]
    }
}


/**
 * @api {get} /symptom/:id Request Symptom information
 * @apiName GetSymptom
 * @apiGroup Symptom
 *
 * @apiParam {String} id Symptoms UUID.
 *
 * @apiSuccess {String} name Name of the Symptom.
 * @apiSuccess {String} description Description of the Symptom.
 */
function *GetSymptom(){
 //
}

/**
 * @api {get} /symptom/:id Request Symptom information
 * @apiName GetSymptom
 * @apiGroup Symptom
 *
 * @apiParam {String} id Symptoms UUID.
 *
 * @apiSuccess {String} name Name of the Symptom.
 * @apiSuccess {String} description Description of the Symptom.
 */
function *PutSymptom(){
}