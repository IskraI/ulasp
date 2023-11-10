//typeOfUser - fop , tov
//activeSection createuser, create editor, carduser, cardeditor
import {
    RegisterForm,
    RegisterNameField,
    RegisterNameLabel,
    RegisterNameInput,
    RegisterBlock,
    ButtonSwitch,
    RegisterField,
    RegisterNameBlock,
    RegisterLabel,
    RegisterInput,
    RegisterArea,
    SectionUserButton,
    SectionUser,
    UserCreateModal,
    RegisterRigthBlock,Commentlabel,Fieldform,
    RegisterLeftBlock,FormButton, RegisterCommentField, CommentTextarea
  } from "../UserCreateModal.styled";
  import ContactFaceField from "./ContactFaceField"
  import {Button} from "../../Button/Button"
const UserFieldForm = ({ control, handleTypeOfStatus, activeSection, typeOfStatus, typeOfUser, isValid, errors, register }) => {
    console.log('activeSection', activeSection)
  return (
    <Fieldform>
      {activeSection === "NewUser" && (
        <RegisterBlock>
          <RegisterLeftBlock>
            <RegisterNameBlock>
              {typeOfUser === "fop" ? (
                <>
                  <RegisterNameField>
                    <RegisterNameLabel>Прізвище</RegisterNameLabel>
                    <RegisterNameInput
                      type="text"
                      placeholder="Прізвище"
                      // className={`${scss.input} ${errors.name && scss.invalid}
                      //  ${!errors.name && dirtyFields.name && scss.valid}`}
                      {...register("lastName")}
                    />
                    <p>{errors.lastName && errors.lastName.message}</p>
                  </RegisterNameField>

                  <RegisterNameField>
                    <RegisterNameLabel>Ім'я</RegisterNameLabel>
                    <RegisterNameInput
                      type="text"
                      placeholder="Ім'я"
                      // className={`${scss.input} ${errors.name && scss.invalid}
                      //  ${!errors.name && dirtyFields.name && scss.valid}`}
                      {...register("firstName")}
                    />
                    <p>{errors.firstName && errors.firstName.message}</p>
                  </RegisterNameField>

                  <RegisterNameField>
                    <RegisterNameLabel>По-батькові</RegisterNameLabel>
                    <RegisterNameInput
                      type="text"
                      placeholder="По-батькові"
                      // className={`${scss.input} ${errors.name && scss.invalid}
                      //  ${!errors.name && dirtyFields.name && scss.valid}`}
                      {...register("fatherName")}
                    />
                    <p>{errors.fatherName && errors.fatherName.message}</p>
                  </RegisterNameField>
                  <ButtonSwitch
                    type="button"
                    isTrue={typeOfStatus}
                    onClick={() => handleTypeOfStatus()}
                  >
                    {typeOfStatus ? (
                      <>
                        On
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <circle cx="6.5" cy="6.5" r="6" fill="#8CACD7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <circle cx="6.5" cy="6.5" r="6" fill="#FFF3BF" />
                        </svg>
                        Off
                      </>
                    )}
                  </ButtonSwitch>
                </>
              ) : (
                <>
                  <RegisterNameField>
                    <RegisterNameLabel>Назва компанії</RegisterNameLabel>
                    <RegisterNameInput
                      type="text"
                      placeholder="Назва компанії"
                      // className={`${scss.input} ${errors.name && scss.invalid}
                      //  ${!errors.name && dirtyFields.name && scss.valid}`}
                      {...register("name")}
                    />
                    <p>{errors.name && errors.lastName.message}</p>
                  </RegisterNameField>

                  <ButtonSwitch type="button" onClick={handleTypeOfStatus}>
                    {typeOfStatus === "true" ? "On" : "Off"}
                  </ButtonSwitch>
                </>
              )}
            </RegisterNameBlock>

            <RegisterField>
              <RegisterLabel>№ договору</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="№ договору"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("contractNumber")}
              />
              <p>{errors.contractNumber && errors.contractNumber.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Код ЄДРПОУ (ІНН)*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Код ЄДРПОУ (ІНН)"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("taxCode")}
              />
              <p>{errors.taxCode && errors.taxCode.message}</p>
            </RegisterField>
            {typeOfUser === "fop" && (
              <RegisterField>
                <RegisterLabel>Дата народження</RegisterLabel>
                <RegisterInput
                  type="text"
                  placeholder="Дата народження"
                  // className={`${scss.input} ${errors.name && scss.invalid}
                  //  ${!errors.name && dirtyFields.name && scss.valid}`}
                  {...register("dayOfBirthday")}
                />
                <p>{errors.dayOfBirthday && errors.dayOfBirthday.message}</p>
                {/* <DatePicker
selected={dayOfBirthday}
onChange={(date) => setDayOfBirthday(date)}
dateFormat="dd.MM.yyyy"
placeholderText="Выберите дату"
/> */}
              </RegisterField>
            )}

            <RegisterField>
              <RegisterLabel>Номер телефону*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Номер телефону"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("telNumber")}
              />
              {console.log("errors", errors)}
              <p>{errors.telNumber && errors.telNumber.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>E-mail*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="E-mail"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("email")}
              />
              <p>{errors.email && errors.email.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Надання доступу до*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Надання доступу до"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("dateOfAccess")}
              />
              <p>{errors.dateOfAccess && errors.dateOfAccess.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Остання оплата* </RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Остання оплата"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("lastPay")}
              />
              <p>{errors.lastPay && errors.lastPay.message}</p>
            </RegisterField>

            <ContactFaceField control = {control} register={register} errors={errors} margintop={"36px"}/>
           
            <></>
          </RegisterLeftBlock>
          <RegisterRigthBlock>
            <RegisterCommentField>
              <Commentlabel>Примітка </Commentlabel>
              <CommentTextarea
                type="text"
                placeholder="Примітка"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("comment")}
              />
              <p>{errors.comment && errors.comment.message}</p>
            </RegisterCommentField>

            <Button
              type="submit"
              padding ="8px"
       
              text= "Додати"              // disabled={!isValid}
            />
          
           
          </RegisterRigthBlock>
        </RegisterBlock>
      )}

      {activeSection === "MusicEditor" && (
        <div>
          <RegisterBlock>
            <RegisterNameBlock>
              <RegisterField>
                <label>Прізвище</label>
                <input
                  type="text"
                  placeholder="Прізвище"
                  // className={`${scss.input} ${errors.name && scss.invalid}
                  //  ${!errors.name && dirtyFields.name && scss.valid}`}
                  {...register("lastName")}
                />
                <p>{errors.lastName && errors.lastName.message}</p>
              </RegisterField>

              <RegisterField>
                <label>Ім'я</label>
                <input
                  type="text"
                  placeholder="Ім'я"
                  // className={`${scss.input} ${errors.name && scss.invalid}
                  //  ${!errors.name && dirtyFields.name && scss.valid}`}
                  {...register("firstName")}
                />
                <p>{errors.firstName && errors.firstName.message}</p>
              </RegisterField>

              <RegisterField>
                <label>По-батькові</label>
                <input
                  type="text"
                  placeholder="По-батькові"
                  // className={`${scss.input} ${errors.name && scss.invalid}
                  //  ${!errors.name && dirtyFields.name && scss.valid}`}
                  {...register("fatherName")}
                />
                <p>{errors.fatherName && errors.fatherName.message}</p>
              </RegisterField>
            </RegisterNameBlock>

            <RegisterField>
              <RegisterLabel>Ідентифікаційний номер*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="234567891"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("taxCode")}
              />
              <p>{errors.taxCode && errors.taxCode.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>Дата народження</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Дата народження"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("dayOfBirthday")}
              />
              <p>{errors.dayOfBirthday && errors.dayOfBirthday.message}</p>
              {/* <DatePicker
selected={dayOfBirthday}
onChange={(date) => setDayOfBirthday(date)}
dateFormat="dd.MM.yyyy"
placeholderText="Выберите дату"
/> */}
            </RegisterField>

            <RegisterField>
              <RegisterLabel>Номер телефону*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="Номер телефону"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("telNumber")}
              />
              {console.log("errors", errors)}
              <p>{errors.telNumber && errors.telNumber.message}</p>
            </RegisterField>
            <RegisterField>
              <RegisterLabel>E-mail*</RegisterLabel>
              <RegisterInput
                type="text"
                placeholder="E-mail"
                // className={`${scss.input} ${errors.name && scss.invalid}
                //  ${!errors.name && dirtyFields.name && scss.valid}`}
                {...register("email")}
              />
              <p>{errors.email && errors.email.message}</p>
            </RegisterField>
          </RegisterBlock>
          <RegisterField>
            <label>Примітка </label>
            <textarea
              type="text"
              placeholder="Примітка"
              // className={`${scss.input} ${errors.name && scss.invalid}
              //  ${!errors.name && dirtyFields.name && scss.valid}`}
              {...register("comment")}
            />
            <p>{errors.comment && errors.comment.message}</p>
          </RegisterField>

     
        </div>
      )}
    </Fieldform>
  );
};

export default UserFieldForm;
