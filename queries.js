const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'courses',
	password: 'postgres',
	port: 5432
})

const getCourses = (request, response) => {
	console.log("getCourses")
	pool.query('SELECT * FROM courselist', (error, results) => {
		if (error){
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getCourseByName = (request, response) => {
	console.log("getCourseByName")
  const name = request.params.name
  pool.query('SELECT * FROM courselist WHERE name = $1', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
	getCourses,
	getCourseByName
}
