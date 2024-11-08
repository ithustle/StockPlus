import { VStack, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"

import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
} from "@/components/ui/file-button"
import { useState } from "react";
import Tesseract from 'tesseract.js';
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/ui/progress-circle";


export default function OcrHome(): JSX.Element {

    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<{
        fullName: string,
        parentsName: string,
        documentId: string,
    }>()

    function handleOCR(image: File) {
        if (!image) {
            alert('Por favor, selecione uma imagem primeiro.');
            return;
        }

        setLoading(true);
        Tesseract.recognize(image, 'por')
            .then(({ data: { text } }) => {

                const extractedData = extractDataFromOCR(text)
                setResponse(extractedData)

                setLoading(false);
            })
            .catch((error) => {
                console.error('Erro no OCR:', error);
                setLoading(false);
            });
    };

    function normalizeText(ocrText: string): string {
        return ocrText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function extractDataFromOCR(ocrText: string) {
        const normalizedText = normalizeText(ocrText);

        const fullNameMatch = normalizedText.match(/Nome Completo:\s*([A-Z\sÀ-ÖØ-öø-ÿ]+?)(?=\s*Filiação)/i);
        const fullName = fullNameMatch ? fullNameMatch[1].trim() : 'Não encontrado';

        const parentsNameMatch = normalizedText.match(/Filiação:\s*([A-Z\sÀ-ÖØ-öø-ÿ]+(?: e [A-Z\sÀ-ÖØ-öø-ÿ]+)?)(?=\s*(?:ASSINATURA|$))/i);
        const parentsName = parentsNameMatch ? parentsNameMatch[1].trim() : 'Não encontrada';

        const documentIdMatch = normalizedText.match(/Bilhete de Identidade Nº:\s*([A-Z0-9]+)/i);
        const documentId = documentIdMatch ? documentIdMatch[1].trim() : 'Não encontrado';

        return {
            fullName,
            parentsName,
            documentId,
        };
    }


    function onFileChange(details: any) {
        const file: File = details.acceptedFiles[0]
        handleOCR(file)
    }

    return (
        <VStack
            w={'4xl'}
            h={'100vh'}
            bg={'white'}
            padding={10}
        >
            <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={1} accept={["image/png", "image/jpeg"]} onFileChange={onFileChange}>
                <FileUploadDropzone
                    label="Clique ou arraste aqui a imagem"
                    description=".png, .jpg até 2MB"
                />
                <FileUploadList />
            </FileUploadRoot>
            <Field label="Nome completo">
                <Input placeholder="Introduza o nome completo" value={response?.fullName} />
            </Field>
            <Field label="Filiação">
                <Input placeholder="Nome do pai e da mãe" value={response?.parentsName} />
            </Field>
            <Field label="Número do bilhete">
                <Input placeholder="Número do BI" value={response?.documentId} />
            </Field>
            {loading ? <ProgressCircleRoot value={null} size="sm">
                <ProgressCircleRing cap="round" />
            </ProgressCircleRoot> : null}
        </VStack>
    )
}