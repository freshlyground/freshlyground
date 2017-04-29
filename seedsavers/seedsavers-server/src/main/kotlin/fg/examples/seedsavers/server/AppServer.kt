package fg.examples.seedsavers.server

import com.beust.klaxon.JsonObject
import com.beust.klaxon.Parser
import com.google.gson.GsonBuilder
import fg.query.json.QueryJson
import fg.query.toJson
import fg.query.toQuery
import kotlinx.html.*
import org.jetbrains.ktor.application.Application
import org.jetbrains.ktor.application.ApplicationCallPipeline
import org.jetbrains.ktor.application.call
import org.jetbrains.ktor.application.install
import org.jetbrains.ktor.content.TextContent
import org.jetbrains.ktor.content.resolveClasspathWithPath
import org.jetbrains.ktor.content.resolveLocalFile
import org.jetbrains.ktor.features.DefaultHeaders
import org.jetbrains.ktor.html.respondHtml
import org.jetbrains.ktor.http.ContentType
import org.jetbrains.ktor.http.HttpMethod
import org.jetbrains.ktor.locations.Locations
import org.jetbrains.ktor.locations.get
import org.jetbrains.ktor.locations.location
import org.jetbrains.ktor.locations.post
import org.jetbrains.ktor.logging.CallLogging
import org.jetbrains.ktor.request.acceptItems
import org.jetbrains.ktor.request.httpMethod
import org.jetbrains.ktor.response.respondText
import org.jetbrains.ktor.routing.Routing
import org.jetbrains.ktor.transform.transform
import java.io.StringReader
import java.nio.file.Paths

@location("/") class index
//@location("/plant/{id}") class plant(val id: Int)
@location("/plant/all") class plant_all

@location("/plant/query") class plant_query
class JsonResponse(val data: Any)

fun Application.main() {

    val workDir = Paths.get(System.getProperty("user.dir"))
    val basedir = workDir.resolve("target/classes/").toFile()

    println(workDir)


    install(DefaultHeaders)
    install(CallLogging)
    install(Locations)
    install(Routing) {
        get<plant_all> {
            call.respond(call.resolveClasspathWithPath("", "plants.json")!!)
        }
        post<plant_query> {

            val postedContent: String = call.request.content[String::class]
            val queryAsJson = Parser().parse(StringReader(postedContent)) as JsonObject
            val query = queryAsJson.toQuery()
            val jsonFile = basedir.resolve("plants.json")
            val queryResult = QueryJson(query).query(jsonFile)

            call.respondText(queryResult.toJson().toJsonString())
        }
        get<index> {
            call.respondHtml {
                head {
                    title { +"Seed Savers Application" }
                    style {
                        id = "freshlyground"
                        type = "text/css"
                    }
                }
                body {
                    script {
                        src = "_resources/js/lib/kotlin.js"
                    }
                    script {
                        src = "_resources/js/lib/query-kt-js.js"
                    }
                    script {
                        src = "_resources/js/lib/elements.js"
                    }
                    script {
                        src = "_resources/js/lib/beans.js"
                    }
                    script {
                        src = "_resources/js/lib/material-design.js"
                    }
                    script {
                        src = "_resources/js/lib/seed-savers-web.js"
                    }
                }
            }
        }
    }

    intercept(ApplicationCallPipeline.Call) { call ->
        if (call.request.httpMethod != HttpMethod.Post) {
            call.respond(call.resolveLocalFile("", basedir)!!)
        }
    }

    val gson = GsonBuilder().create()
    intercept(ApplicationCallPipeline.Infrastructure) { call ->
        if (call.request.acceptItems().any { it.value == "application/json" }) {
            call.transform.register<JsonResponse> { value ->
                TextContent(gson.toJson(value.data), ContentType.Application.Json)
            }
        }
    }
}

fun FlowContent.widget(body: FlowContent.() -> Unit) {
    div { body() }
}
