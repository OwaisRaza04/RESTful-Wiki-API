<h1>Wikipedia RESTful API</h1>
<h3>This project provides a simple RESTful API for searching and retrieving Wikipedia articles, built using JavaScript.</h3>
<hr>

<h2>Endpoints</h2>
<h3>Search</h3>
<h4>`GET /search?query={query}`</h4>

<h4>Searches Wikipedia for articles matching the given query and returns a list of matching articles.</h4>

<h3>Article</h3>
<h4>`GET /article?title={title}`</h4>

  <h4>Retrieves the full text of the Wikipedia article with the given title.</h4>
  <hr>
<h2>Usage</h2>
<h3>To use the API, make a GET request to the appropriate endpoint with the required query parameters. The response will be in JSON format.</h3>


<h2>Examples</h2>
<h3>Search for articles about "OpenAI": </h3>

<img src="image/1.png>


<h3>Retrieve the article for "Deep learning": </h3>

<img src="image/2.png>

<hr>
<h2>Requirements</h2>

<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>wikipedia-js</li>
</ul>

<hr>

<h2>Installation</h2>
<ol>
<li>Clone the repository and install the required packages</li>
<li>Run the API</li>
</ol>



<hr>

<h2>Contribution</h2>
<h3>We welcome contributions to this project. If you find any bug or have any feature request, please open an issue or submit a pull request.</h3>
