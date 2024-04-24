//typeOfUser - fop , tov
//activeSection createuser, create editor, carduser, cardeditor
import DatePicker from "react-datepicker";
import { uk } from "date-fns/locale";
import { parse, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "../../../styles/datePicker.css";
import { useState } from "react";
import {
  RegisterField,
  RegisterLabel,
  RegisterInput,
  RegisterRigthBlock,
  Commentlabel,
  Fieldform,
  RegisterLeftBlock,
  RegisterCommentField,
  CommentTextarea,
  Tooltip,
} from "../UserForm/UserCreateForm.styled";
import ContactFaceFieldCard from "./ContactFaceFieldCard";
import RegisterNameFieldCard from "./RegisterNameFieldCard";
import CommonFieldCard from "./CommonFieldsCard";
import { Controller } from "react-hook-form";
const CardUserField = ({
  user,
  control,
  handleTypeOfAccess,
  activeSectionCard,
  typeOfAccess,
  typeOfUser,
  isValid,
  errors,
  register,
  isEditing,
  handleEditActivation,
  handleCloseEdit,
  playlistCount,
  tracksCount,
  dirtyFields,
  access,
  editor,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const dateFormatRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  // console.log("errors :>> ", errors);
  // console.log("user", user);
  const today = new Date();

  return (
    <Fieldform>
      <RegisterLeftBlock
        // width="calc(50% - 27px)"
        flexBasis="617px"
        minWidth="617px"
      >
        <RegisterNameFieldCard
          isEditing={isEditing}
          handleEditActivation={handleEditActivation}
          handleTypeOfAccess={handleTypeOfAccess}
          register={register}
          errors={errors}
          typeOfUser={typeOfUser}
          typeOfAccess={typeOfAccess}
          isValid={isValid}
          activeSectionCard={activeSectionCard}
          readOnly={!isEditing}
          user={user}
          control={control}
          handleCloseEdit={handleCloseEdit}
          access={access}
          editor={editor}
        />

        {activeSectionCard === "User" && (
          <>
            <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>

              <Controller
                name="contractNumberDoc"
                control={control}
                defaultValue={user.contractNumberDoc}
                render={({ field }) => (
                  <>
                    <RegisterInput
                      type="text"
                      placeholder="№ договора"
                      readOnly={!isEditing}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={
                        isEditing
                          ? `${errors.contractNumberDoc ? "invalid" : "valid"}`
                          : ""
                      }
                    />
                    {errors.contractNumberDoc && (
                      <Tooltip
                        className={`${
                          errors.contractNumberDoc ? "visible" : ""
                        }`}
                      >
                        {errors.contractNumberDoc.message}
                      </Tooltip>
                    )}
                  </>
                )}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>№ договору (логін)*</RegisterLabel>
              <Controller
                name="contractNumber"
                control={control}
                defaultValue={user.contractNumber}
                render={({ field }) => (
                  <>
                    <RegisterInput
                      type="text"
                      placeholder="№ договора"
                      readOnly={!isEditing}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={
                        isEditing
                          ? `${errors.contractNumber ? "invalid" : "valid"}`
                          : ""
                      }
                    />
                    {errors.contractNumber && (
                      <Tooltip
                        className={`${errors.contractNumber ? "visible" : ""}`}
                      >
                        {errors.contractNumber.message}
                      </Tooltip>
                    )}
                  </>
                )}
              />
            </RegisterField>

            <CommonFieldCard
              typeOfUser={typeOfUser}
              register={register}
              control={control}
              isValid={isValid}
              errors={errors}
              readOnly={!isEditing}
              user={user}
              isEditing={isEditing}
            />

            <RegisterField>
              <RegisterLabel>Дата договору</RegisterLabel>
              <Controller
                name="dateOfAccess"
                control={control}
                defaultValue={user.dateOfAccess}
                render={({ field }) => (
                  <>
                    {!isCalendarOpen && (
                      <>
                        <RegisterInput
                          type="text"
                          placeholder="Дата договору"
                          readOnly={!isEditing}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className={
                            isEditing
                              ? errors.dateOfAccess
                                ? "invalid"
                                : "valid"
                              : ""
                          }
                        />
                        {errors && errors.dateOfAccess && isEditing && (
                          <Tooltip
                            className={`${
                              errors.dateOfAccess ? "visible" : ""
                            }`}
                          >
                            {errors.dateOfAccess.message}
                          </Tooltip>
                        )}
                      </>
                    )}
                    {isEditing && (
                      <button
                        className="buttonCalendarCardUser"
                        type="button"
                        onClick={() => setIsCalendarOpen(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                        >
                          <mask id="ipSApplication0">
                            <g
                              fill="none"
                              stroke="#fff"
                              strokeLinejoin="round"
                              strokeWidth="4"
                            >
                              <path
                                strokeLinecap="round"
                                d="M40.04 22v20h-32V22"
                              ></path>
                              <path
                                fill="#fff"
                                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                              ></path>
                            </g>
                          </mask>
                          <path
                            fill="currentColor"
                            d="M0 0h48v48H0z"
                            mask="url(#ipSApplication0)"
                          ></path>
                        </svg>
                      </button>
                    )}
                    {isCalendarOpen && (
                      <DatePicker
                        wrapperClassName="datePickerCard"
                        selected={
                          dateFormatRegex.test(field.value)
                            ? parse(field.value, "dd.MM.yyyy", new Date())
                            : today
                        }
                        maxDate={today}
                        todayButton="Сьогодні" //кнопка Сегодня
                        onChange={(date) => {
                          setSelectedDate(date);
                          field.onChange(format(date, "dd.MM.yyyy")); // Передача выбранной даты в поле формы
                          setIsCalendarOpen(false); // Закрыть календарь после выбора даты
                        }}
                        className="date"
                        onBlur={() => {
                          if (!selectedDate) {
                            field.onChange(""); // Если дата не выбрана, передайте пустую строку
                          }
                        }}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Дата договору"
                        locale={uk} //на укр
                        open={isCalendarOpen}
                        onClickOutside={() => setIsCalendarOpen(false)}
                        // readOnly={!isEditing} // Переключение режима редактирования/просмотра
                      />
                    )}
                  </>
                )}
              />
            </RegisterField>
            {/* <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <Controller
                name="lastPay"
                control={control}
                defaultValue={user.lastPay}
                render={({ field }) => (
                  <>
                    <RegisterInput
                      type="text"
                      placeholder="Остання оплата"
                      readOnly={!isEditing}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={
                        isEditing
                          ? `${errors.lastPay ? "invalid" : "valid"}`
                          : ""
                      }
                    />
                    {errors && errors.lastPay && (
                      <Tooltip className={`${errors.lastPay ? "visible" : ""}`}>
                        {errors.lastPay.message}
                      </Tooltip>
                    )}
                  </>
                )}
              />
            </RegisterField> */}
            <RegisterField>
              <RegisterLabel>Кількість доданих плейлистів </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="загружається"
                defaultValue={playlistCount}
                readOnly={true}
              />
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Кількість доданих пісень </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="загружається"
                defaultValue={tracksCount}
                readOnly={true}
              />
            </RegisterField>

            <ContactFaceFieldCard
              isEditing={isEditing}
              control={control}
              register={register}
              errors={errors}
              margintop={"16px"}
              readOnly={!isEditing}
              user={user}
            />
          </>
        )}

        {activeSectionCard === "MusicEditor" && (
          <CommonFieldCard
            activeSectionCard={activeSectionCard}
            register={register}
            control={control}
            isValid={isValid}
            errors={errors}
            readOnly={!isEditing}
            user={user}
            isEditing={isEditing}
            editor={true}
          />
        )}
      </RegisterLeftBlock>
      <RegisterRigthBlock
        // width="calc(50% - 27px)"
        flexBasis="250px"
      >
        <RegisterCommentField>
          <Commentlabel>Примітка </Commentlabel>
          <Controller
            name="comment"
            control={control}
            defaultValue={user.comment}
            render={({ field }) => (
              <CommentTextarea
                type="text"
                placeholder="Примітка"
                readOnly={!isEditing}
                value={field.value}
                height="178px"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </RegisterCommentField>
      </RegisterRigthBlock>
    </Fieldform>
  );
};

export default CardUserField;
