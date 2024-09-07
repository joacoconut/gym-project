import { Box, Stack, Typography } from "@mui/material"
import { ExerciseCard } from "./ExerciseCard"
import { useEffect } from "react"
import { fetchData, exerciseOptions } from "../utils/fetchData"

export const Exercises = ({ bodyPart, exercises, setExercises }) => {

    console.log(typeof bodyPart, "=", bodyPart)

    useEffect(() => {
        console.log("cambio")
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === "all") {
                console.log("probando 1")
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
                console.log("probando 2")
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData)
        }

        fetchExercisesData();
    }, [bodyPart])


    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>

            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {exercises.map((exercise, index) => {
                    return <ExerciseCard key={index} exercise={exercise} />
                })}
            </Stack>
        </Box>
    )
}
