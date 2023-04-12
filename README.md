# vector-image-search
Small project to implement reverse image search using the Weaviate database to convert the images to vectors and query the database to find similar images.
#### Given a test image:
<div align="center">
<img src="https://github.com/hagarfisher/vector-image-search/blob/main/test.png?raw=true" width="20%"/>
</div>

#### Output photos would be:
<div align="center">
<img src="https://github.com/hagarfisher/vector-image-search/blob/main/query_results/result_1.png?raw=true" width="20%"/>
<img src="https://github.com/hagarfisher/vector-image-search/blob/main/query_results/result_2.png?raw=true" width="20%"/>
</div>


## Installation
To install this project, you need to have Node.js and npm installed on your system. You also need to have Docker installed to run the Weaviate database.

1. Clone the repository using the following command:
```bash
git clone https://github.com/hagarfisher/vector-image-search.git
```
2. Change into the project directory:
```bash
cd vector-image-search
```
3. Install the dependencies:

```bash
npm install
```

## Usage

Before running the system, you need to start the Weaviate database in a Docker container:
```bash
docker-compose up -d    
```
Once the database is running, you can start the system by running the index.ts script:
```bash
npm start
```

## Acknowledgments
This project was inspired by [Fireship](https://fireship.io/)
