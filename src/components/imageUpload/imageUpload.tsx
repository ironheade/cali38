import { useState, useRef } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Text, Group, Button, createStyles, Progress, Grid, AspectRatio, Image, Input, ActionIcon } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons';
import { storage } from '../../firebase'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: 30,
    },

    dropzone: {
        borderWidth: 1,
        paddingBottom: 50,
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    control: {
        position: 'absolute',
        width: 250,
        left: 'calc(50% - 125px)',
        bottom: -20,
    },
}));

interface File {
    name?: string;
}


export function ImageUpload(props: any) {

    const { classes, theme } = useStyles();
    const openRef = useRef<() => void>(null);
    const [progress, setProgress] = useState(0);
    const [currentFile, setCurrentFile] = useState<File>({})
    const formHandler = (e: Object[]) => {
        var file: any = e[0]
        console.log(file)
        setCurrentFile(file)
        //uploadFiles(file);
    };

    const uploadFiles = (file: any) => {
        //
        if (!file) return;
        //const storageRef = ref(storage, `files/${imageName}`);
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
                setCurrentFile({})
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    props.onUpload(downloadURL)
                    //setImageLinks([...imageLinks, downloadURL])
                });
            }
        );
    };

    return (
        <>
            <div className={classes.wrapper}>
                <Dropzone
                    openRef={openRef}
                    onDrop={formHandler}
                    className={classes.dropzone}
                    radius="md"
                    accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.pdf]}
                    maxSize={30 * 1024 ** 2}
                >
                    <div style={{ pointerEvents: 'none' }}>
                        <Group position="center">
                            <Dropzone.Accept>
                                <IconDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <IconCloudUpload
                                    size={50}
                                    color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                                    stroke={1.5}
                                />
                            </Dropzone.Idle>
                        </Group>

                        <Text align="center" weight={700} size="lg" mt="xl">
                            <Dropzone.Accept>Drop Images here</Dropzone.Accept>
                            <Dropzone.Reject>Images less than 30mb</Dropzone.Reject>
                            <Dropzone.Idle>Upload Images</Dropzone.Idle>
                        </Text>
                        <Text align="center" size="sm" mt="xs" color="dimmed">
                            Drag&apos;n&apos;drop files here to upload. We can accept only <i>.png/.jpeg</i> files that
                            are less than 30mb in size.<br />
                            Uploading done {progress}%
                        </Text>
                        <Progress value={progress} striped />



                    </div>
                </Dropzone>
                <Button className={classes.control} size="md" radius="xl" onClick={() => currentFile.name == undefined ? openRef.current?.() : uploadFiles(currentFile)}>
                    {currentFile.name == undefined ? "Select Files" : "Upload Files"}
                </Button>


            </div>

            <div style={{ justifyContent: "center", display: "flex" }}>
                <Button rightIcon={<IconX />} variant="white" color="gray" onClick={() => setCurrentFile({})}>
                    {currentFile.name == undefined && "no file chosen"}{currentFile.name}
                </Button>
            </div>
        </>
    );
}
