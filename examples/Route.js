/**
 * Representation of a route
 */
export class Route{

    /**
     * A route refers to an http command and is identified by a URL
     * @param type
     * @param alias
     * @param url
     */
    constructor({type, alias, url}){
        this.type = type;
        this.alias = alias;
        this.url = url;
        this.parameters = [];
    }


    /**
     * Add a parameter to the route.
     * @param name
     * @param validation
     * @returns {Route}
     */
    param({name, validation}){
        // TODO: add
        this.parameters.push();
        return this;
    }



}


/**
 *
 */
export class GET extends Route{

    constructor({alias, url}){
        super({type: "GET", alias, url})
    }

}